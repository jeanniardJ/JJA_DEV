<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Migration d'initialisation JJA_DEV CMS
 * Création de toutes les tables de base héritées de CMS_SF
 */
final class Version20250618202733 extends AbstractMigration
{
  public function getDescription(): string
  {
    return 'Initialisation complète du CMS JJA_DEV avec toutes les tables de base';
  }

  public function up(Schema $schema): void
  {
    // this up() migration is auto-generated, please modify it to your needs
    $this->addSql(<<<'SQL'
            CREATE TABLE appointments (
              id INT AUTO_INCREMENT NOT NULL,
              user_email VARCHAR(255) NOT NULL,
              date DATE NOT NULL,
              time TIME NOT NULL COMMENT '(DC2Type:time_immutable)',
              type VARCHAR(255) NOT NULL,
              first_name VARCHAR(255) NOT NULL,
              last_name VARCHAR(255) NOT NULL,
              meeting_mode VARCHAR(255) NOT NULL,
              phone VARCHAR(255) NOT NULL,
              company VARCHAR(255) DEFAULT NULL,
              notes VARCHAR(255) DEFAULT NULL,
              status VARCHAR(255) NOT NULL,
              location VARCHAR(255) NOT NULL,
              reminder_sent TINYINT(1) DEFAULT 0 NOT NULL,
              created_at DATETIME NOT NULL COMMENT '(DC2Type:datetime_immutable)',
              updated_at DATETIME NOT NULL COMMENT '(DC2Type:datetime_immutable)',
              PRIMARY KEY(id)
            ) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB
        SQL);
    $this->addSql(<<<'SQL'
            CREATE TABLE config_template (
              id INT AUTO_INCREMENT NOT NULL,
              name VARCHAR(255) NOT NULL,
              value JSON NOT NULL,
              PRIMARY KEY(id)
            ) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB
        SQL);
    $this->addSql(<<<'SQL'
            CREATE TABLE contact (
              id INT AUTO_INCREMENT NOT NULL,
              name VARCHAR(255) NOT NULL,
              email VARCHAR(255) NOT NULL,
              phone VARCHAR(20) NOT NULL,
              objet VARCHAR(255) NOT NULL,
              sujet LONGTEXT NOT NULL,
              atdate DATE NOT NULL,
              PRIMARY KEY(id)
            ) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB
        SQL);
    $this->addSql(<<<'SQL'
            CREATE TABLE email_exchange (
              id INT AUTO_INCREMENT NOT NULL,
              sent_at DATETIME NOT NULL,
              sender VARCHAR(255) NOT NULL,
              recipient VARCHAR(255) NOT NULL,
              subjet LONGTEXT NOT NULL,
              body LONGTEXT NOT NULL,
              is_read TINYINT(1) NOT NULL,
              PRIMARY KEY(id)
            ) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB
        SQL);
    $this->addSql(<<<'SQL'
            CREATE TABLE interaction_history (
              id INT AUTO_INCREMENT NOT NULL,
              prospect_id INT NOT NULL,
              interaction_date DATETIME NOT NULL,
              interaction_type VARCHAR(255) NOT NULL,
              notes LONGTEXT NOT NULL,
              INDEX IDX_47FC472AD182060A (prospect_id),
              PRIMARY KEY(id)
            ) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB
        SQL);
    $this->addSql(<<<'SQL'
            CREATE TABLE module (
              id INT AUTO_INCREMENT NOT NULL,
              id_github INT NOT NULL,
              name VARCHAR(255) NOT NULL,
              created_at DATETIME NOT NULL COMMENT '(DC2Type:datetime_immutable)',
              update_at DATETIME DEFAULT NULL COMMENT '(DC2Type:datetime_immutable)',
              is_install TINYINT(1) NOT NULL,
              description LONGTEXT DEFAULT NULL,
              url VARCHAR(255) NOT NULL,
              PRIMARY KEY(id)
            ) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB
        SQL);
    $this->addSql(<<<'SQL'
            CREATE TABLE note (
              id INT AUTO_INCREMENT NOT NULL,
              prospect_id INT DEFAULT NULL,
              content LONGTEXT NOT NULL,
              created_at DATETIME NOT NULL,
              updated_at DATETIME DEFAULT NULL,
              author VARCHAR(255) DEFAULT NULL,
              UNIQUE INDEX UNIQ_CFBDFA14D182060A (prospect_id),
              PRIMARY KEY(id)
            ) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB
        SQL);
    $this->addSql(<<<'SQL'
            CREATE TABLE page (
              id INT AUTO_INCREMENT NOT NULL,
              route_id INT NOT NULL,
              title VARCHAR(255) NOT NULL,
              slug VARCHAR(255) NOT NULL,
              created_at DATE NOT NULL,
              updated_at DATE NOT NULL,
              is_published TINYINT(1) NOT NULL,
              meta_description VARCHAR(255) DEFAULT NULL,
              content LONGTEXT NOT NULL,
              UNIQUE INDEX UNIQ_140AB620989D9B62 (slug),
              UNIQUE INDEX UNIQ_140AB62034ECB4E6 (route_id),
              PRIMARY KEY(id)
            ) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB
        SQL);
    $this->addSql(<<<'SQL'
            CREATE TABLE prospect (
              id INT AUTO_INCREMENT NOT NULL,
              status_id INT NOT NULL,
              note_id INT DEFAULT NULL,
              firstname VARCHAR(255) NOT NULL,
              lastname VARCHAR(255) DEFAULT NULL,
              position VARCHAR(255) DEFAULT NULL,
              location VARCHAR(255) DEFAULT NULL,
              website VARCHAR(255) DEFAULT NULL,
              email VARCHAR(255) NOT NULL,
              phone VARCHAR(255) DEFAULT NULL,
              INDEX IDX_C9CE8C7D6BF700BD (status_id),
              UNIQUE INDEX UNIQ_C9CE8C7D26ED0855 (note_id),
              PRIMARY KEY(id)
            ) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB
        SQL);
    $this->addSql(<<<'SQL'
            CREATE TABLE recurring_event (
              id INT AUTO_INCREMENT NOT NULL,
              name VARCHAR(255) NOT NULL,
              start_time_recur TIME NOT NULL,
              end_time_recur TIME NOT NULL,
              start DATE NOT NULL,
            end DATE DEFAULT NULL,
            days_of_week LONGTEXT DEFAULT NULL COMMENT '(DC2Type:simple_array)',
            PRIMARY KEY(id))DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB
        SQL);
    $this->addSql(<<<'SQL'
            CREATE TABLE reminder (
              id INT AUTO_INCREMENT NOT NULL,
              prospect_id INT NOT NULL,
              title VARCHAR(255) NOT NULL,
              description LONGTEXT DEFAULT NULL,
              reminder_date DATETIME NOT NULL,
              is_completed TINYINT(1) NOT NULL,
              INDEX IDX_40374F40D182060A (prospect_id),
              PRIMARY KEY(id)
            ) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB
        SQL);
    $this->addSql(<<<'SQL'
            CREATE TABLE reset_password_request (
              id INT AUTO_INCREMENT NOT NULL,
              user_id INT NOT NULL,
              selector VARCHAR(20) NOT NULL,
              hashed_token VARCHAR(100) NOT NULL,
              requested_at DATETIME NOT NULL COMMENT '(DC2Type:datetime_immutable)',
              expires_at DATETIME NOT NULL COMMENT '(DC2Type:datetime_immutable)',
              INDEX IDX_7CE748AA76ED395 (user_id),
              PRIMARY KEY(id)
            ) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB
        SQL);
    $this->addSql(<<<'SQL'
            CREATE TABLE role (
              id INT AUTO_INCREMENT NOT NULL,
              name VARCHAR(255) NOT NULL,
              second_name VARCHAR(255) NOT NULL,
              PRIMARY KEY(id)
            ) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB
        SQL);
    $this->addSql(<<<'SQL'
            CREATE TABLE route (
              id INT AUTO_INCREMENT NOT NULL,
              page_id INT NOT NULL,
              path VARCHAR(255) NOT NULL,
              UNIQUE INDEX UNIQ_2C42079C4663E4 (page_id),
              PRIMARY KEY(id)
            ) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB
        SQL);
    $this->addSql(<<<'SQL'
            CREATE TABLE status (
              id INT AUTO_INCREMENT NOT NULL,
              name VARCHAR(255) NOT NULL,
              description LONGTEXT DEFAULT NULL,
              PRIMARY KEY(id)
            ) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB
        SQL);
    $this->addSql(<<<'SQL'
            CREATE TABLE user (
              id INT AUTO_INCREMENT NOT NULL,
              username VARCHAR(180) NOT NULL,
              password VARCHAR(255) NOT NULL,
              ip VARCHAR(255) NOT NULL,
              email VARCHAR(255) NOT NULL,
              is_verified TINYINT(1) NOT NULL,
              UNIQUE INDEX UNIQ_8D93D649F85E0677 (username),
              UNIQUE INDEX UNIQ_8D93D649E7927C74 (email),
              PRIMARY KEY(id)
            ) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB
        SQL);
    $this->addSql(<<<'SQL'
            CREATE TABLE user_roles (
              user_id INT NOT NULL,
              role_id INT NOT NULL,
              INDEX IDX_54FCD59FA76ED395 (user_id),
              INDEX IDX_54FCD59FD60322AC (role_id),
              PRIMARY KEY(user_id, role_id)
            ) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB
        SQL);
    $this->addSql(<<<'SQL'
            CREATE TABLE messenger_messages (
              id BIGINT AUTO_INCREMENT NOT NULL,
              body LONGTEXT NOT NULL,
              headers LONGTEXT NOT NULL,
              queue_name VARCHAR(190) NOT NULL,
              created_at DATETIME NOT NULL COMMENT '(DC2Type:datetime_immutable)',
              available_at DATETIME NOT NULL COMMENT '(DC2Type:datetime_immutable)',
              delivered_at DATETIME DEFAULT NULL COMMENT '(DC2Type:datetime_immutable)',
              INDEX IDX_75EA56E0FB7336F0 (queue_name),
              INDEX IDX_75EA56E0E3BD61CE (available_at),
              INDEX IDX_75EA56E016BA31DB (delivered_at),
              PRIMARY KEY(id)
            ) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB
        SQL);
    $this->addSql(<<<'SQL'
            ALTER TABLE
              interaction_history
            ADD
              CONSTRAINT FK_47FC472AD182060A FOREIGN KEY (prospect_id) REFERENCES prospect (id)
        SQL);
    $this->addSql(<<<'SQL'
            ALTER TABLE
              note
            ADD
              CONSTRAINT FK_CFBDFA14D182060A FOREIGN KEY (prospect_id) REFERENCES prospect (id)
        SQL);
    $this->addSql(<<<'SQL'
            ALTER TABLE
              page
            ADD
              CONSTRAINT FK_140AB62034ECB4E6 FOREIGN KEY (route_id) REFERENCES route (id)
        SQL);
    $this->addSql(<<<'SQL'
            ALTER TABLE
              prospect
            ADD
              CONSTRAINT FK_C9CE8C7D6BF700BD FOREIGN KEY (status_id) REFERENCES status (id)
        SQL);
    $this->addSql(<<<'SQL'
            ALTER TABLE
              prospect
            ADD
              CONSTRAINT FK_C9CE8C7D26ED0855 FOREIGN KEY (note_id) REFERENCES note (id)
        SQL);
    $this->addSql(<<<'SQL'
            ALTER TABLE
              reminder
            ADD
              CONSTRAINT FK_40374F40D182060A FOREIGN KEY (prospect_id) REFERENCES prospect (id)
        SQL);
    $this->addSql(<<<'SQL'
            ALTER TABLE
              reset_password_request
            ADD
              CONSTRAINT FK_7CE748AA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)
        SQL);
    $this->addSql(<<<'SQL'
            ALTER TABLE route ADD CONSTRAINT FK_2C42079C4663E4 FOREIGN KEY (page_id) REFERENCES page (id)
        SQL);
    $this->addSql(<<<'SQL'
            ALTER TABLE
              user_roles
            ADD
              CONSTRAINT FK_54FCD59FA76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE
        SQL);
    $this->addSql(<<<'SQL'
            ALTER TABLE
              user_roles
            ADD
              CONSTRAINT FK_54FCD59FD60322AC FOREIGN KEY (role_id) REFERENCES role (id) ON DELETE CASCADE
        SQL);
    $this->addSql(<<<'SQL'
            DROP INDEX name ON config
        SQL);
  }

  public function down(Schema $schema): void
  {
    // this down() migration is auto-generated, please modify it to your needs
    $this->addSql(<<<'SQL'
            ALTER TABLE interaction_history DROP FOREIGN KEY FK_47FC472AD182060A
        SQL);
    $this->addSql(<<<'SQL'
            ALTER TABLE note DROP FOREIGN KEY FK_CFBDFA14D182060A
        SQL);
    $this->addSql(<<<'SQL'
            ALTER TABLE page DROP FOREIGN KEY FK_140AB62034ECB4E6
        SQL);
    $this->addSql(<<<'SQL'
            ALTER TABLE prospect DROP FOREIGN KEY FK_C9CE8C7D6BF700BD
        SQL);
    $this->addSql(<<<'SQL'
            ALTER TABLE prospect DROP FOREIGN KEY FK_C9CE8C7D26ED0855
        SQL);
    $this->addSql(<<<'SQL'
            ALTER TABLE reminder DROP FOREIGN KEY FK_40374F40D182060A
        SQL);
    $this->addSql(<<<'SQL'
            ALTER TABLE reset_password_request DROP FOREIGN KEY FK_7CE748AA76ED395
        SQL);
    $this->addSql(<<<'SQL'
            ALTER TABLE route DROP FOREIGN KEY FK_2C42079C4663E4
        SQL);
    $this->addSql(<<<'SQL'
            ALTER TABLE user_roles DROP FOREIGN KEY FK_54FCD59FA76ED395
        SQL);
    $this->addSql(<<<'SQL'
            ALTER TABLE user_roles DROP FOREIGN KEY FK_54FCD59FD60322AC
        SQL);
    $this->addSql(<<<'SQL'
            DROP TABLE appointments
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
    $this->addSql(<<<'SQL'
            CREATE UNIQUE INDEX name ON config (name)
        SQL);
  }
}
