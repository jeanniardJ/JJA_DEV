<?php

namespace App\Controller;

use DateTimeImmutable;
use App\Entity\RecurringEvent;
use App\Form\RecurringEventType;
use App\Repository\RecurringEventRepository;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('admin/recurringEvent')]
class RecurringEventAdminController extends AbstractController
{
    #[Route('/', name: 'app_recurring_event_admin_index', methods: ['GET', 'POST'])]
    public function index(EntityManagerInterface $entityManager, Request $request): Response
    {
        $recurringEvent = new RecurringEvent();

        $form = $this->createForm(RecurringEventType::class, $recurringEvent);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $entityManager->persist($recurringEvent);
            $entityManager->flush();
            $this->addFlash('success', ['modal', 'Recurring event created successfully.']);
            return $this->redirectToRoute('app_recurring_event_admin_index');
        }

        return $this->render('recurring_event/admin/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route('/api', name: 'app_recurring_event_admin_api_index', methods: ['GET'])]
    public function indexApi(RecurringEventRepository $recurringEventRepository, SerializerInterface $serializer, Request $request): Response
    {
        $start = $request->get('start');
        $end = $request->get('end');

        $recurringEvents = $recurringEventRepository->findRecurringEventForDateStartEnd($start, $end);


        $recurringEventsArray = array_map(function ($recurringEvent) {
            return [
                'id' => $recurringEvent->getId(),
                'title' => $recurringEvent->getName(),
                'groupId' => $recurringEvent->getName(), // This is used to group events together in the calendar
                'daysOfWeek' => $recurringEvent->getDaysOfWeek(),
                'startTime' => $recurringEvent->getStartTimeRecur()->format('H:i:s'),
                'endTime' => $recurringEvent->getEndTimeRecur()->format('H:i:s'),
                'startRecur' => $recurringEvent->getStart()->format('Y-m-d'),
                'endRecur' => $recurringEvent->getEnd()->format('Y-m-d'),
                'color' => 'green',
                'interactive' => false,
                'url' => '/admin/recurringEvent/' . $recurringEvent->getId() . '/edit',
                'content' => '',
                'allDay' => false,
                'overlap' => false,
            ];
        }, $recurringEvents);

        $appointmentsJson = $serializer->serialize($recurringEventsArray, 'json');

        return new Response($appointmentsJson, 200, [
            'Content-Type' => 'application/json'
        ]);
    }

    #[Route('/{id}/edit', name: 'app_recurring_event_admin_edit', methods: ['GET', 'POST'])]
    public function edit(): Response
    {
        return $this->render('recurring_event/admin/edit.html.twig');
    }

    #[Route('/{id}', name: 'app_recurring_event_admin_delete', methods: ['POST'])]
    public function delete(): Response
    {
        return $this->redirectToRoute('app_recurring_event_admin_index');
    }
}
