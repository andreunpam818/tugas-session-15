<?php 
    class Customer
    {
        private string $name;
        private string $email;
        private string $noHp;

        public function __construct(string $name, string $email, string $noHp)
        {
            $this->name = trim($name);
            $this->email = trim($email);
            $this->noHp = trim($noHp);
        }

        public function getName(): string
        {
            return $this->name;
        }

        public function getEmail(): string
        {
            return $this->email;
        }

        public function getNoHp(): string
        {
            return $this->noHp;
        }
    }



?>