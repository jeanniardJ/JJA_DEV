---
name: Bundle Gestion des Rendez-vous
about: Développement du bundle Symfony pour la gestion complète des rendez-vous et planning CRM
title: "[BUNDLE] Créer le bundle de gestion des rendez-vous"
labels: ["enhancement", "bundle", "crm", "appointments", "calendar", "priority:medium"]
assignees: ""
---

## 🎯 Objectif

Développer un bundle Symfony réutilisable pour la gestion complète des rendez-vous et du planning dans le système CRM JJA_DEV. Ce bundle doit permettre la planification, le suivi et la gestion des rendez-vous commerciaux et client.

## 📋 Description

Le bundle AppointmentBundle doit fournir une solution modulaire et autonome pour :

-   **Calendrier intégré** : Interface de planification intuitive
-   **Gestion des créneaux** : Disponibilités et réservations
-   **Notifications automatiques** : Rappels et confirmations
-   **Intégration CRM** : Lien avec prospects et clients
-   **Rapports planning** : Analytics et optimisation agenda

## 🏗️ Architecture Technique

### Structure du Bundle

```
src/Bundle/AppointmentBundle/
├── AppointmentBundle.php
├── DependencyInjection/
│   ├── Configuration.php
│   └── AppointmentBundleExtension.php
├── Entity/
│   ├── Appointment.php       # Rendez-vous
│   ├── AppointmentType.php   # Types RDV
│   ├── TimeSlot.php          # Créneaux horaires
│   ├── Calendar.php          # Calendriers
│   ├── Availability.php      # Disponibilités
│   └── Reminder.php          # Rappels/Notifications
├── Service/
│   ├── AppointmentService.php
│   ├── CalendarService.php
│   ├── AvailabilityService.php
│   ├── NotificationService.php
│   └── ReportingService.php
├── Controller/
│   ├── AppointmentController.php
│   ├── CalendarController.php
│   └── AvailabilityController.php
├── Form/
│   ├── AppointmentType.php
│   ├── AvailabilityType.php
│   └── CalendarConfigType.php
├── Repository/
│   ├── AppointmentRepository.php
│   ├── TimeSlotRepository.php
│   └── AvailabilityRepository.php
├── EventListener/
│   ├── AppointmentEventListener.php
│   └── NotificationEventListener.php
├── Resources/
│   ├── config/
│   │   ├── services.yaml
│   │   └── routes.yaml
│   ├── public/
│   │   ├── css/
│   │   │   └── calendar.css
│   │   └── js/
│   │       └── calendar.js
│   └── views/
│       ├── appointment/
│       ├── calendar/
│       └── availability/
└── Tests/
    ├── Unit/
    ├── Functional/
    └── Integration/
```

## 🔧 Fonctionnalités Requises

### Gestion des Rendez-vous

-   [ ] **Création RDV** : Interface simple et rapide
-   [ ] **Types de RDV** : Catégorisation configurable
-   [ ] **Durées variables** : Créneaux flexibles
-   [ ] **Récurrence** : RDV récurrents automatiques
-   [ ] **Participants multiples** : Gestion invités et intervenants

### Calendrier Intégré

-   [ ] **Vue mensuelle** : Affichage planning complet
-   [ ] **Vue hebdomadaire** : Détail semaine de travail
-   [ ] **Vue journalière** : Planning détaillé du jour
-   [ ] **Navigation intuitive** : Changement dates facile
-   [ ] **Glisser-déposer** : Modification RDV par drag&drop

### Disponibilités

-   [ ] **Horaires de travail** : Configuration jours/heures
-   [ ] **Exceptions** : Congés et indisponibilités
-   [ ] **Créneaux libres** : Calcul automatique disponibilités
-   [ ] **Réservation en ligne** : Interface publique booking
-   [ ] **Conflits automatiques** : Détection chevauchements

### Notifications

-   [ ] **Rappels email** : Notifications avant RDV
-   [ ] **SMS optionnel** : Rappels par SMS (API)
-   [ ] **Confirmations** : Validation participation
-   [ ] **Annulations** : Gestion des reports/annulations
-   [ ] **Notifications temps réel** : Alertes instantanées

## 📊 Entités Principales

### Appointment

```php
- id (int, auto)
- title (string, 255)
- description (text, nullable)
- appointmentType (AppointmentType, relation)
- startDateTime (datetime)
- endDateTime (datetime)
- duration (int) // minutes
- status (enum: scheduled|confirmed|completed|cancelled|no_show)
- location (string, 255, nullable)
- isOnline (bool, default: false)
- meetingUrl (string, 500, nullable)
- organizer (User, relation)
- attendees (User[], relation many-to-many)
- prospect (Prospect, relation, nullable)
- customer (Customer, relation, nullable)
- notes (text, nullable)
- reminderSent (bool, default: false)
- confirmationRequired (bool, default: false)
- confirmed (bool, default: false)
- createdAt (datetime)
- updatedAt (datetime)
```

### AppointmentType

```php
- id (int, auto)
- name (string, 100)
- description (text, nullable)
- duration (int) // minutes par défaut
- color (string, 7) // code couleur hex
- isActive (bool, default: true)
- requiresConfirmation (bool, default: false)
- allowOnlineBooking (bool, default: false)
- reminderMinutes (int, default: 60)
- maxAdvanceBookingDays (int, nullable)
- createdAt (datetime)
- updatedAt (datetime)
```

### Availability

```php
- id (int, auto)
- user (User, relation)
- dayOfWeek (int, 0-6) // 0=dimanche
- startTime (time)
- endTime (time)
- isRecurring (bool, default: true)
- specificDate (date, nullable)
- isAvailable (bool, default: true)
- breakStartTime (time, nullable)
- breakEndTime (time, nullable)
- createdAt (datetime)
- updatedAt (datetime)
```

### TimeSlot

```php
- id (int, auto)
- user (User, relation)
- date (date)
- startTime (time)
- endTime (time)
- isBooked (bool, default: false)
- appointment (Appointment, relation, nullable)
- isException (bool, default: false)
- reason (string, 255, nullable)
- createdAt (datetime)
```

## 🔗 Intégrations Requises

### Avec CMS_SF

-   [ ] **Système d'authentification** : Utilisation rôles CMS_SF
-   [ ] **Interface BackOffice** : Intégration navigation admin
-   [ ] **Templates de base** : Héritage design CMS_SF
-   [ ] **Permissions** : Respect système de permissions existant

### Avec Autres Bundles

-   [ ] **ProspectsBundle** : Planification RDV prospects
-   [ ] **CustomersBundle** : RDV clients existants
-   [ ] **QuoteInvoiceBundle** : RDV présentation devis
-   [ ] **UserBundle** : Gestion utilisateurs/commerciaux

### Intégrations Externes

-   [ ] **Google Calendar** : Synchronisation bidirectionnelle
-   [ ] **Outlook Calendar** : Sync calendrier Microsoft
-   [ ] **SMS Gateway** : Notifications SMS (optionnel)
-   [ ] **Zoom/Teams** : Liens réunions automatiques
-   [ ] **Email SMTP** : Envoi notifications email

## 🎨 Interface Utilisateur

### Calendrier Principal

-   [ ] **Vue responsive** : Adaptation mobile/desktop
-   [ ] **Navigation fluide** : Changement mois/semaine/jour
-   [ ] **Codes couleurs** : Différenciation types RDV
-   [ ] **Popup détails** : Infos RDV au survol
-   [ ] **Actions rapides** : Création/modification directe

### Formulaires

-   [ ] **Nouveau RDV** : Interface création simplifiée
-   [ ] **Disponibilités** : Configuration horaires travail
-   [ ] **Types RDV** : Paramétrage catégories
-   [ ] **Paramètres** : Configuration notifications
-   [ ] **Import/Export** : Gestion données calendrier

### Dashboard

-   [ ] **Agenda du jour** : RDV journée en cours
-   [ ] **Prochains RDV** : Planning à venir
-   [ ] **Statistiques** : Métriques utilisation planning
-   [ ] **Taux occupation** : Optimisation agenda
-   [ ] **Alertes** : Notifications importantes

## 📝 Configuration Bundle

### Services Configurables

```yaml
appointments:
    calendar:
        default_view: "month" # month|week|day
        first_day_of_week: 1 # 0=dimanche, 1=lundi
        working_hours_start: "08:00"
        working_hours_end: "18:00"
        slot_duration: 30 # minutes
        max_advance_booking: 90 # jours
    notifications:
        email_reminders: true
        sms_reminders: false
        default_reminder_time: 60 # minutes avant
        confirmation_required: false
    integrations:
        google_calendar: false
        outlook_calendar: false
        zoom_integration: false
```

### Permissions Requises

-   `ROLE_APPOINTMENTS_VIEW` : Consultation planning
-   `ROLE_APPOINTMENTS_EDIT` : Modification RDV
-   `ROLE_APPOINTMENTS_DELETE` : Suppression RDV
-   `ROLE_APPOINTMENTS_ADMIN` : Administration complète
-   `ROLE_CALENDAR_MANAGER` : Gestion calendriers

## ✅ Tests Requis

### Tests Unitaires

-   [ ] **AppointmentService** : CRUD et logique métier
-   [ ] **CalendarService** : Calculs disponibilités
-   [ ] **AvailabilityService** : Gestion créneaux
-   [ ] **NotificationService** : Envoi rappels

### Tests Fonctionnels

-   [ ] **Controllers** : Routes et actions CRUD
-   [ ] **Formulaires** : Validation et soumission
-   [ ] **Calendrier** : Interface et interactions
-   [ ] **API REST** : Endpoints pour frontend

### Tests d'Intégration

-   [ ] **Workflow complet** : Création → Confirmation → Rappel
-   [ ] **Intégration bundles** : Liens prospects/clients
-   [ ] **Calendriers externes** : Sync Google/Outlook
-   [ ] **Notifications** : Email et SMS

## 📈 Métriques et KPIs

### Indicateurs Clés

-   [ ] **Taux occupation** : Optimisation planning
-   [ ] **Taux de présence** : Absence aux RDV
-   [ ] **Délai de booking** : Temps avant RDV
-   [ ] **Types RDV populaires** : Analyse utilisation
-   [ ] **Performance commerciaux** : Activité par utilisateur

### Rapports Automatiques

-   [ ] **Planning hebdomadaire** : Résumé activité
-   [ ] **Analyse mensuelle** : Tendances et optimisations
-   [ ] **Taux de conversion** : RDV → Opportunités
-   [ ] **Efficacité planning** : Utilisation temps commercial

## 📚 Documentation Requise

-   [ ] **Guide installation** : Procédure activation bundle
-   [ ] **Configuration** : Paramètres et intégrations
-   [ ] **Guide utilisateur** : Manuel planification
-   [ ] **API documentation** : Endpoints et webhook
-   [ ] **Intégrations** : Google Calendar, Outlook, etc.

## 🎯 Critères d'Acceptation

### Technique

-   [ ] Bundle autonome et réutilisable
-   [ ] Interface calendrier responsive
-   [ ] Performances optimisées (< 100ms)
-   [ ] Couverture tests minimum 80%
-   [ ] Conformité standards PSR-12

### Fonctionnel

-   [ ] Calendrier intuitif et fluide
-   [ ] Gestion complète des RDV
-   [ ] Notifications fiables
-   [ ] Intégration CRM parfaite
-   [ ] Booking en ligne fonctionnel

### Qualité

-   [ ] Code reviewed et validé
-   [ ] Tests unitaires et fonctionnels passants
-   [ ] Sécurité auditée
-   [ ] Documentation complète
-   [ ] Interface UX validée

## ⏰ Priorité

**Priorité : MOYENNE** - Bundle important pour productivité commerciale

## 🔄 Dépendances

-   [ ] Bundle ProspectsBundle (intégration prospects)
-   [ ] Système authentification CMS_SF (existant)
-   [ ] Framework Symfony 6.4 (existant)
-   [ ] Bundle frontend (Bootstrap + React)

## 📋 Checklist Développement

### Phase 1 : Structure Bundle

-   [ ] Création structure répertoires
-   [ ] Configuration bundle et services
-   [ ] Définition entités principales
-   [ ] Repositories et relations

### Phase 2 : Services Métier

-   [ ] AppointmentService et CRUD
-   [ ] CalendarService et disponibilités
-   [ ] NotificationService et rappels
-   [ ] Tests unitaires services

### Phase 3 : Interface Calendrier

-   [ ] Frontend JavaScript (React)
-   [ ] Intégration Bootstrap calendrier
-   [ ] API REST pour frontend
-   [ ] Tests fonctionnels interface

### Phase 4 : Fonctionnalités Avancées

-   [ ] Booking en ligne public
-   [ ] Notifications email/SMS
-   [ ] Rapports et analytics
-   [ ] Intégrations externes

### Phase 5 : Optimisations

-   [ ] Performance et cache
-   [ ] Tests de charge
-   [ ] Sécurité et permissions
-   [ ] Documentation utilisateur

---

**Note** : Ce bundle améliore significativement la productivité commerciale en centralisant la gestion des rendez-vous. Il doit être développé avec une attention particulière à l'expérience utilisateur et aux performances.
