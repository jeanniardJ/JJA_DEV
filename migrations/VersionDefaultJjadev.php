<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class VersionDefaultJjadev extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE config (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, value JSON NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE config_template (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, value JSON NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE contact (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, phone VARCHAR(20) NOT NULL, objet VARCHAR(255) NOT NULL, sujet LONGTEXT NOT NULL, atdate DATE NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE module (id INT AUTO_INCREMENT NOT NULL, id_github INT NOT NULL, name VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', update_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', is_install TINYINT(1) NOT NULL, description LONGTEXT DEFAULT NULL, url VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE page (id INT AUTO_INCREMENT NOT NULL, route_id INT NOT NULL, title VARCHAR(255) NOT NULL, slug VARCHAR(255) NOT NULL, created_at DATE NOT NULL, updated_at DATE NOT NULL, is_published TINYINT(1) NOT NULL, meta_description VARCHAR(255) DEFAULT NULL, content LONGTEXT NOT NULL, UNIQUE INDEX UNIQ_140AB620989D9B62 (slug), UNIQUE INDEX UNIQ_140AB62034ECB4E6 (route_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE reset_password_request (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, selector VARCHAR(20) NOT NULL, hashed_token VARCHAR(100) NOT NULL, requested_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', expires_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_7CE748AA76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE role (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, second_name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE route (id INT AUTO_INCREMENT NOT NULL, page_id INT NOT NULL, path VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_2C42079C4663E4 (page_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE status (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, description LONGTEXT DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, username VARCHAR(180) NOT NULL, password VARCHAR(255) NOT NULL, ip VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, is_verified TINYINT(1) NOT NULL, UNIQUE INDEX UNIQ_8D93D649F85E0677 (username), UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user_roles (user_id INT NOT NULL, role_id INT NOT NULL, INDEX IDX_54FCD59FA76ED395 (user_id), INDEX IDX_54FCD59FD60322AC (role_id), PRIMARY KEY(user_id, role_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE messenger_messages (id BIGINT AUTO_INCREMENT NOT NULL, body LONGTEXT NOT NULL, headers LONGTEXT NOT NULL, queue_name VARCHAR(190) NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', available_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', delivered_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_75EA56E0FB7336F0 (queue_name), INDEX IDX_75EA56E0E3BD61CE (available_at), INDEX IDX_75EA56E016BA31DB (delivered_at), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE page ADD CONSTRAINT FK_140AB62034ECB4E6 FOREIGN KEY (route_id) REFERENCES route (id)');
        $this->addSql('ALTER TABLE reset_password_request ADD CONSTRAINT FK_7CE748AA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE route ADD CONSTRAINT FK_2C42079C4663E4 FOREIGN KEY (page_id) REFERENCES page (id)');
        $this->addSql('ALTER TABLE user_roles ADD CONSTRAINT FK_54FCD59FA76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user_roles ADD CONSTRAINT FK_54FCD59FD60322AC FOREIGN KEY (role_id) REFERENCES role (id) ON DELETE CASCADE');

        $site = [
            'name' => 'JJA-DEV',
            'title' => 'Développement Symfony',
            'description' => 'Site de démonstration pour JJA-DEV',
            'url' => 'https://www.jjadev.com',
            'email' => 'contact@jjadev.com',
            'logo' => 'build/images/blank/40x40.png',
            'favicon' => 'build/images/blank/40x40.png',
            'keywords' => 'JJA-DEV, Symfony, PHP, Open Source',
        ];

        $propriety = [
            'name' => 'JJA-DEV',
            'email' => 'contact@jjadev.com',
            'phone' => '',
            'city' => 'Conliège',
            'zipCode' => '39570',
            'country' => 'France',
            'address' => '34 rue neuve',
            'siret' => 12345678901234,
        ];

        $social = [
            'facebookUrl' => null,
            'twitterUrl' => null,
            'linkedinUrl' => null,
            'instagramUrl' => null,
            'youtubeUrl' => null,
            'whatsappUrl' => null,
        ];

        $this->addSql('INSERT INTO config (name, value) VALUES (:name, :value)', [
            'name' => 'site',
            'value' => json_encode($site),
        ]);

        $this->addSql('INSERT INTO config (name, value) VALUES (:name, :value)', [
            'name' => 'propriety',
            'value' => json_encode($propriety),
        ]);

        $this->addSql('INSERT INTO config (name, value) VALUES (:name, :value)', [
            'name' => 'social',
            'value' => json_encode($social),
        ]);

        $roles = [
            ['name' => 'ROLE_SUPER_ADMIN', 'second_name' => 'Super Administrateur'],
            ['name' => 'ROLE_ADMIN', 'second_name' => 'Administrateur'],
            ['name' => 'ROLE_USER', 'second_name' => 'Utilisateur'],
            ['name' => 'ROLE_DEV', 'second_name' => 'Développeur'],
        ];

        foreach ($roles as $role) {
            $this->addSql('INSERT INTO role (name, second_name) VALUES (:name, :second_name)', [
                'name' => $role['name'],
                'second_name' => $role['second_name'],
            ]);
        }
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE page DROP FOREIGN KEY FK_140AB62034ECB4E6');
        $this->addSql('ALTER TABLE reset_password_request DROP FOREIGN KEY FK_7CE748AA76ED395');
        $this->addSql('ALTER TABLE route DROP FOREIGN KEY FK_2C42079C4663E4');
        $this->addSql('ALTER TABLE user_roles DROP FOREIGN KEY FK_54FCD59FA76ED395');
        $this->addSql('ALTER TABLE user_roles DROP FOREIGN KEY FK_54FCD59FD60322AC');
        $this->addSql('DROP TABLE config');
        $this->addSql('DROP TABLE config_template');
        $this->addSql('DROP TABLE contact');
        $this->addSql('DROP TABLE module');
        $this->addSql('DROP TABLE page');
        $this->addSql('DROP TABLE reset_password_request');
        $this->addSql('DROP TABLE role');
        $this->addSql('DROP TABLE route');
        $this->addSql('DROP TABLE status');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE user_roles');
        $this->addSql('DROP TABLE messenger_messages');
    }
}
