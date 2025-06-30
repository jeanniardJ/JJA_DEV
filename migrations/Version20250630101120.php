<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250630101120 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            CREATE TABLE appointments (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, user_email VARCHAR(255) NOT NULL, date DATE NOT NULL, time TIME NOT NULL --(DC2Type:time_immutable)
            , type VARCHAR(255) NOT NULL, first_name VARCHAR(255) NOT NULL, last_name VARCHAR(255) NOT NULL, meeting_mode VARCHAR(255) NOT NULL, phone VARCHAR(255) NOT NULL, company VARCHAR(255) DEFAULT NULL, notes VARCHAR(255) DEFAULT NULL, status VARCHAR(255) NOT NULL, location VARCHAR(255) NOT NULL, reminder_sent BOOLEAN DEFAULT 0 NOT NULL, created_at DATETIME NOT NULL --(DC2Type:datetime_immutable)
            , updated_at DATETIME NOT NULL --(DC2Type:datetime_immutable)
            )
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE config (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(255) NOT NULL, value CLOB NOT NULL --(DC2Type:json)
            )
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE config_template (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(255) NOT NULL, value CLOB NOT NULL --(DC2Type:json)
            )
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE contact (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, phone VARCHAR(20) NOT NULL, objet VARCHAR(255) NOT NULL, sujet CLOB NOT NULL, atdate DATE NOT NULL)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE email_exchange (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, sent_at DATETIME NOT NULL, sender VARCHAR(255) NOT NULL, recipient VARCHAR(255) NOT NULL, subjet CLOB NOT NULL, body CLOB NOT NULL, is_read BOOLEAN NOT NULL)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE interaction_history (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, prospect_id INTEGER NOT NULL, interaction_date DATETIME NOT NULL, interaction_type VARCHAR(255) NOT NULL, notes CLOB NOT NULL, CONSTRAINT FK_47FC472AD182060A FOREIGN KEY (prospect_id) REFERENCES prospect (id) NOT DEFERRABLE INITIALLY IMMEDIATE)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_47FC472AD182060A ON interaction_history (prospect_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE module (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, id_github INTEGER NOT NULL, name VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL --(DC2Type:datetime_immutable)
            , update_at DATETIME DEFAULT NULL --(DC2Type:datetime_immutable)
            , is_install BOOLEAN NOT NULL, description CLOB DEFAULT NULL, url VARCHAR(255) NOT NULL)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE note (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, prospect_id INTEGER DEFAULT NULL, content CLOB NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, author VARCHAR(255) DEFAULT NULL, CONSTRAINT FK_CFBDFA14D182060A FOREIGN KEY (prospect_id) REFERENCES prospect (id) NOT DEFERRABLE INITIALLY IMMEDIATE)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE UNIQUE INDEX UNIQ_CFBDFA14D182060A ON note (prospect_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE page (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, route_id INTEGER NOT NULL, title VARCHAR(255) NOT NULL, slug VARCHAR(255) NOT NULL, created_at DATE NOT NULL, updated_at DATE NOT NULL, is_published BOOLEAN NOT NULL, meta_description VARCHAR(255) DEFAULT NULL, content CLOB NOT NULL, CONSTRAINT FK_140AB62034ECB4E6 FOREIGN KEY (route_id) REFERENCES route (id) NOT DEFERRABLE INITIALLY IMMEDIATE)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE UNIQUE INDEX UNIQ_140AB620989D9B62 ON page (slug)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE UNIQUE INDEX UNIQ_140AB62034ECB4E6 ON page (route_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE prospect (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, status_id INTEGER NOT NULL, note_id INTEGER DEFAULT NULL, firstname VARCHAR(255) NOT NULL, lastname VARCHAR(255) DEFAULT NULL, position VARCHAR(255) DEFAULT NULL, location VARCHAR(255) DEFAULT NULL, website VARCHAR(255) DEFAULT NULL, email VARCHAR(255) NOT NULL, phone VARCHAR(255) DEFAULT NULL, CONSTRAINT FK_C9CE8C7D6BF700BD FOREIGN KEY (status_id) REFERENCES status (id) NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_C9CE8C7D26ED0855 FOREIGN KEY (note_id) REFERENCES note (id) NOT DEFERRABLE INITIALLY IMMEDIATE)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_C9CE8C7D6BF700BD ON prospect (status_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE UNIQUE INDEX UNIQ_C9CE8C7D26ED0855 ON prospect (note_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE recurring_event (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(255) NOT NULL, start_time_recur TIME NOT NULL, end_time_recur TIME NOT NULL, start DATE NOT NULL, "end" DATE DEFAULT NULL, days_of_week CLOB DEFAULT NULL --(DC2Type:simple_array)
            )
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE reminder (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, prospect_id INTEGER NOT NULL, title VARCHAR(255) NOT NULL, description CLOB DEFAULT NULL, reminder_date DATETIME NOT NULL, is_completed BOOLEAN NOT NULL, CONSTRAINT FK_40374F40D182060A FOREIGN KEY (prospect_id) REFERENCES prospect (id) NOT DEFERRABLE INITIALLY IMMEDIATE)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_40374F40D182060A ON reminder (prospect_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE reset_password_request (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, user_id INTEGER NOT NULL, selector VARCHAR(20) NOT NULL, hashed_token VARCHAR(100) NOT NULL, requested_at DATETIME NOT NULL --(DC2Type:datetime_immutable)
            , expires_at DATETIME NOT NULL --(DC2Type:datetime_immutable)
            , CONSTRAINT FK_7CE748AA76ED395 FOREIGN KEY (user_id) REFERENCES user (id) NOT DEFERRABLE INITIALLY IMMEDIATE)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_7CE748AA76ED395 ON reset_password_request (user_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE role (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(255) NOT NULL, second_name VARCHAR(255) NOT NULL)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE route (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, page_id INTEGER NOT NULL, path VARCHAR(255) NOT NULL, CONSTRAINT FK_2C42079C4663E4 FOREIGN KEY (page_id) REFERENCES page (id) NOT DEFERRABLE INITIALLY IMMEDIATE)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE UNIQUE INDEX UNIQ_2C42079C4663E4 ON route (page_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE status (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(255) NOT NULL, description CLOB DEFAULT NULL)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE user (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, username VARCHAR(180) NOT NULL, password VARCHAR(255) NOT NULL, ip VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, is_verified BOOLEAN NOT NULL)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE UNIQUE INDEX UNIQ_8D93D649F85E0677 ON user (username)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE UNIQUE INDEX UNIQ_8D93D649E7927C74 ON user (email)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE user_roles (user_id INTEGER NOT NULL, role_id INTEGER NOT NULL, PRIMARY KEY(user_id, role_id), CONSTRAINT FK_54FCD59FA76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_54FCD59FD60322AC FOREIGN KEY (role_id) REFERENCES role (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_54FCD59FA76ED395 ON user_roles (user_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_54FCD59FD60322AC ON user_roles (role_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE messenger_messages (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, body CLOB NOT NULL, headers CLOB NOT NULL, queue_name VARCHAR(190) NOT NULL, created_at DATETIME NOT NULL --(DC2Type:datetime_immutable)
            , available_at DATETIME NOT NULL --(DC2Type:datetime_immutable)
            , delivered_at DATETIME DEFAULT NULL --(DC2Type:datetime_immutable)
            )
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_75EA56E0FB7336F0 ON messenger_messages (queue_name)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_75EA56E0E3BD61CE ON messenger_messages (available_at)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_75EA56E016BA31DB ON messenger_messages (delivered_at)
        SQL);
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            DROP TABLE appointments
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE config
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE config_template
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE contact
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE email_exchange
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE interaction_history
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE module
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE note
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE page
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE prospect
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE recurring_event
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE reminder
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE reset_password_request
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE role
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE route
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE status
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE user
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE user_roles
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE messenger_messages
        SQL);
    }
}
