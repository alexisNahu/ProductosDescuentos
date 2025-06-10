
-- -----------------------------------------------------
-- Schema sanjuan
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `sanjuan` ;

-- -----------------------------------------------------
-- Schema sanjuan
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `sanjuan` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `sanjuan` ;

-- -----------------------------------------------------
-- Table `sanjuan`.`stands`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sanjuan`.`stands` ;

CREATE TABLE IF NOT EXISTS `sanjuan`.`stands` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(150) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `sanjuan`.`cashbox`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sanjuan`.`cashbox` ;

CREATE TABLE IF NOT EXISTS `sanjuan`.`cashbox` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NULL,
  `stand_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_cashbox_stands1_idx` (`stand_id` ASC) VISIBLE,
  CONSTRAINT `fk_cashbox_stands1`
    FOREIGN KEY (`stand_id`)
    REFERENCES `sanjuan`.`stands` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `sanjuan`.`permissions`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sanjuan`.`permissions` ;

CREATE TABLE IF NOT EXISTS `sanjuan`.`permissions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `sanjuan`.`products`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sanjuan`.`products` ;

CREATE TABLE IF NOT EXISTS `sanjuan`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NULL,
  `price` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `sanjuan`.`roles`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sanjuan`.`roles` ;

CREATE TABLE IF NOT EXISTS `sanjuan`.`roles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `permissions_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_roles_permissions1_idx` (`permissions_id` ASC) VISIBLE,
  CONSTRAINT `fk_roles_permissions1`
    FOREIGN KEY (`permissions_id`)
    REFERENCES `sanjuan`.`permissions` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `sanjuan`.`users`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sanjuan`.`users` ;

CREATE TABLE IF NOT EXISTS `sanjuan`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(100) NOT NULL,
  `password` VARCHAR(150) NULL DEFAULT NULL,
  `name` VARCHAR(200) NULL DEFAULT NULL,
  `role_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_users_roles_idx` (`role_id` ASC) VISIBLE,
  CONSTRAINT `fk_users_roles`
    FOREIGN KEY (`role_id`)
    REFERENCES `sanjuan`.`roles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `sanjuan`.`sales`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sanjuan`.`sales` ;

CREATE TABLE IF NOT EXISTS `sanjuan`.`sales` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(100) NULL,
  `date` DATETIME NULL,
  `cashbox_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_sales_cashbox1_idx` (`cashbox_id` ASC) VISIBLE,
  INDEX `fk_sales_users1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_sales_cashbox1`
    FOREIGN KEY (`cashbox_id`)
    REFERENCES `sanjuan`.`cashbox` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_sales_users1`
    FOREIGN KEY (`user_id`)
    REFERENCES `sanjuan`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `sanjuan`.`sales_details`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sanjuan`.`sales_details` ;

CREATE TABLE IF NOT EXISTS `sanjuan`.`sales_details` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `sale_id` INT NOT NULL,
  `product_id` INT NOT NULL,
  `amount` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_sales_details_sales1_idx` (`sale_id` ASC) VISIBLE,
  INDEX `fk_sales_details_products1_idx` (`product_id` ASC) VISIBLE,
  CONSTRAINT `fk_sales_details_sales1`
    FOREIGN KEY (`sale_id`)
    REFERENCES `sanjuan`.`sales` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_sales_details_products1`
    FOREIGN KEY (`product_id`)
    REFERENCES `sanjuan`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


DROP TABLE IF EXISTS `sanjuan`.`user_tokens`;

CREATE TABLE IF NOT EXISTS `sanjuan`.`user_tokens` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `token` TEXT NOT NULL,
  `expires_at` DATETIME NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `fk_user_tokens_users_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_tokens_users` FOREIGN KEY (`user_id`) REFERENCES `sanjuan`.`users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
