<?php

namespace App\Controller;

use DateTime;
use App\Entity\Appointment;
use App\Form\AppointmentType;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\AppointmentRepository;
use App\Repository\RecurringEventRepository;
use DateTimeImmutable;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/admin/appointment')]
class AppointmentAdminController extends AbstractController
{
    #[Route('/', name: 'app_appointment_admin_index', methods: ['GET'])]
    public function index(): Response
    {
        return $this->render('appointment/admin/index.html.twig');
    }

    #[Route('/api', name: 'app_appointment_admin_api_index', methods: ['GET'])]
    public function indexApi(AppointmentRepository $appointmentRepository, RecurringEventRepository $recurringEventRepository, SerializerInterface $serializer, Request $request): Response
    {
        $requestedStart = $request->get('start');
        $requestedEnd = $request->get('end');

        $datasJson = [];
        $datasArray = [];

        // Find appointments for the requested period
        $appointments = $appointmentRepository->findAppointmentsForDateStartEnd($requestedStart, $requestedEnd);
        $recurringEvents = $recurringEventRepository->findRecurringEventForDateStartEnd($requestedStart, $requestedEnd);

        // Serialize appointments
        foreach ($appointments as $appointment) {
            $datasArray[] = [
                'id' => $appointment->getId(),
                'title' => $appointment->getFirstName() . ' ' . $appointment->getLastName(),
                'start' => $appointment->getDate()->format('Y-m-d') . 'T' . $appointment->getTime()->format('H:i:s'),
                'end' => $appointment->getDate()->format('Y-m-d') . 'T' . $appointment->getTime()->format('H:i:s'),
                'color' => 'blue',
                'content' => $appointment->getNotes(),
                'url' => '/admin/appointment/' . $appointment->getId() . '/edit',
                'interactive' => true,
                'overlap' => true,
                'allDay' => false,
                ''
            ];
        }

        // Serialize recurring events
        foreach ($recurringEvents as $recurringEvent) {
            $datasArray[] = [
                'id' => $recurringEvent->getId(),
                'title' => $recurringEvent->getName(),
                'groupId' => $recurringEvent->getName(),
                'daysOfWeek' => $recurringEvent->getDaysOfWeek(),
                'startTime' => $recurringEvent->getStartTimeRecur()->format('H:i:s'),
                'endTime' => $recurringEvent->getEndTimeRecur()->format('H:i:s'),
                'startRecur' => $recurringEvent->getStart()->format('Y-m-d'),
                'endRecur' => $recurringEvent->getEnd()->format('Y-m-d'),
                'color' => 'green',
                'interactive' => false,
                'overlap' => false,
                'url' => '/admin/recurringEvent/' . $recurringEvent->getId() . '/edit',
            ];
        }

        $datasJson = $serializer->serialize($datasArray, 'json');

        return new Response($datasJson, 200, [
            'Content-Type' => 'application/json'
        ]);
    }

    #[Route('/new', name: 'app_appointment_admin_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $appointment = new Appointment();
        $form = $this->createForm(AppointmentType::class, $appointment);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($appointment);
            $entityManager->flush();
            $this->addFlash('success', ['modal', 'Appointment created successfully.']);
            return $this->redirectToRoute('app_appointment_admin_index');
        }

        return $this->render('appointment/admin/new.html.twig', [
            'appointment' => $appointment,
            'form' => $form,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_appointment_admin_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Appointment $appointment, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(AppointmentType::class, $appointment);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_appointment_index');
        }

        return $this->render('appointment/admin/edit.html.twig', [
            'appointment' => $appointment,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_appointment_admin_delete', methods: ['POST'])]
    public function delete(Request $request, Appointment $appointment, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete' . $appointment->getId(), $request->getPayload()->get('_token'))) {
            $entityManager->remove($appointment);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_appointment_admin_index', [], Response::HTTP_SEE_OTHER);
    }
}
