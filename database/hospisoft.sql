-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 27, 2026 at 01:30 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hospisoft`
--

-- --------------------------------------------------------

--
-- Table structure for table `citas`
--

CREATE TABLE `citas` (
  `idCitas` int(11) NOT NULL,
  `fechaCita` datetime NOT NULL,
  `estado` varchar(200) NOT NULL,
  `tipoSolicitudCita` varchar(200) NOT NULL,
  `idMedico` int(11) NOT NULL,
  `idPaciente` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `detalleentrada`
--

CREATE TABLE `detalleentrada` (
  `detalleEntrada` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `nombreMedicamentoEntrada` varchar(250) NOT NULL,
  `detallesEntrada` varchar(45) NOT NULL,
  `fechaVencimiento` date NOT NULL,
  `Entrada_idmovimientosMedicamentos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `detalleformula`
--

CREATE TABLE `detalleformula` (
  `iddetalleformula` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `observaciones` varchar(250) DEFAULT 'tomar cantidad por dias',
  `formula_idFormula` int(11) NOT NULL,
  `medicamento_idMedicamento` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `entrada`
--

CREATE TABLE `entrada` (
  `idmovimientosMedicamentos` int(11) NOT NULL,
  `fechaMovimiento` date NOT NULL,
  `tipoMovimiento` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `formula`
--

CREATE TABLE `formula` (
  `idFormula` int(11) NOT NULL,
  `fechaFormula` date NOT NULL,
  `medico_idtblMedico` int(11) NOT NULL,
  `paciente_idPaciente` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `historiaclinica`
--

CREATE TABLE `historiaclinica` (
  `idHistoriaClinica` int(11) NOT NULL,
  `fechaHistoriaClinica` date NOT NULL,
  `diagnosticoHistoriaClinica` varchar(200) NOT NULL,
  `observacionesHistoriaClinica` varchar(200) NOT NULL,
  `idMedico` int(11) NOT NULL,
  `idPaciente` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `medicamento`
--

CREATE TABLE `medicamento` (
  `idMedicamento` int(11) NOT NULL,
  `nombreMedicamento` varchar(200) NOT NULL,
  `cantidadMedicamento` int(11) NOT NULL,
  `precioMedicamento` int(11) NOT NULL,
  `Entrada_idmovimientosMedicamentos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `medico`
--

CREATE TABLE `medico` (
  `idMedico` int(11) NOT NULL,
  `nombreMedico` varchar(200) NOT NULL,
  `especialidadMedico` varchar(200) NOT NULL,
  `celularMedico` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `paciente`
--

CREATE TABLE `paciente` (
  `idPaciente` int(11) NOT NULL,
  `nombrePaciente` varchar(200) NOT NULL,
  `celularPaciente` varchar(200) NOT NULL,
  `emailPaciente` varchar(200) NOT NULL,
  `fechaNacimientoPaciente` date NOT NULL,
  `eps` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `rol`
--

CREATE TABLE `rol` (
  `idRol` int(11) NOT NULL,
  `nombreRol` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

CREATE TABLE `usuario` (
  `idUsuario` int(11) NOT NULL,
  `nombreUsuario` varchar(200) NOT NULL,
  `correoUsuario` varchar(200) NOT NULL,
  `passwordUsuario` varchar(200) NOT NULL,
  `Rol_idRol` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `citas`
--
ALTER TABLE `citas`
  ADD PRIMARY KEY (`idCitas`),
  ADD KEY `fk_tblCitas_tblMedico1_idx` (`idMedico`),
  ADD KEY `fk_tblCitas_tblPaciente1_idx` (`idPaciente`);

--
-- Indexes for table `detalleentrada`
--
ALTER TABLE `detalleentrada`
  ADD PRIMARY KEY (`detalleEntrada`),
  ADD KEY `fk_detalleEntrada_Entrada1_idx` (`Entrada_idmovimientosMedicamentos`);

--
-- Indexes for table `detalleformula`
--
ALTER TABLE `detalleformula`
  ADD PRIMARY KEY (`iddetalleformula`,`formula_idFormula`,`medicamento_idMedicamento`),
  ADD KEY `fk_detalleformula_formula1_idx` (`formula_idFormula`),
  ADD KEY `fk_detalleformula_medicamento1_idx` (`medicamento_idMedicamento`);

--
-- Indexes for table `entrada`
--
ALTER TABLE `entrada`
  ADD PRIMARY KEY (`idmovimientosMedicamentos`);

--
-- Indexes for table `formula`
--
ALTER TABLE `formula`
  ADD PRIMARY KEY (`idFormula`,`medico_idtblMedico`,`paciente_idPaciente`),
  ADD KEY `fk_formula_medico1_idx` (`medico_idtblMedico`),
  ADD KEY `fk_formula_paciente1_idx` (`paciente_idPaciente`);

--
-- Indexes for table `historiaclinica`
--
ALTER TABLE `historiaclinica`
  ADD PRIMARY KEY (`idHistoriaClinica`),
  ADD KEY `fk_tblHistoriaClinica_tblMedico1_idx` (`idMedico`),
  ADD KEY `fk_tblHistoriaClinica_tblPaciente1_idx` (`idPaciente`);

--
-- Indexes for table `medicamento`
--
ALTER TABLE `medicamento`
  ADD PRIMARY KEY (`idMedicamento`,`Entrada_idmovimientosMedicamentos`),
  ADD KEY `fk_medicamento_Entrada1_idx` (`Entrada_idmovimientosMedicamentos`);

--
-- Indexes for table `medico`
--
ALTER TABLE `medico`
  ADD PRIMARY KEY (`idMedico`),
  ADD UNIQUE KEY `idtblMedico_UNIQUE` (`idMedico`);

--
-- Indexes for table `paciente`
--
ALTER TABLE `paciente`
  ADD PRIMARY KEY (`idPaciente`),
  ADD UNIQUE KEY `emailPaciente_UNIQUE` (`emailPaciente`),
  ADD UNIQUE KEY `idtblPaciente_UNIQUE` (`idPaciente`);

--
-- Indexes for table `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`idRol`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`idUsuario`),
  ADD UNIQUE KEY `correoUsuario_UNIQUE` (`correoUsuario`),
  ADD KEY `fk_tblUsuario_tblRol1_idx` (`Rol_idRol`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `citas`
--
ALTER TABLE `citas`
  MODIFY `idCitas` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `detalleentrada`
--
ALTER TABLE `detalleentrada`
  MODIFY `detalleEntrada` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `detalleformula`
--
ALTER TABLE `detalleformula`
  MODIFY `iddetalleformula` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `entrada`
--
ALTER TABLE `entrada`
  MODIFY `idmovimientosMedicamentos` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `formula`
--
ALTER TABLE `formula`
  MODIFY `idFormula` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `historiaclinica`
--
ALTER TABLE `historiaclinica`
  MODIFY `idHistoriaClinica` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `medicamento`
--
ALTER TABLE `medicamento`
  MODIFY `idMedicamento` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `rol`
--
ALTER TABLE `rol`
  MODIFY `idRol` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `citas`
--
ALTER TABLE `citas`
  ADD CONSTRAINT `fk_tblCitas_tblMedico1` FOREIGN KEY (`idMedico`) REFERENCES `medico` (`idMedico`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_tblCitas_tblPaciente1` FOREIGN KEY (`idPaciente`) REFERENCES `paciente` (`idPaciente`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `detalleentrada`
--
ALTER TABLE `detalleentrada`
  ADD CONSTRAINT `fk_detalleEntrada_Entrada1` FOREIGN KEY (`Entrada_idmovimientosMedicamentos`) REFERENCES `entrada` (`idmovimientosMedicamentos`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `detalleformula`
--
ALTER TABLE `detalleformula`
  ADD CONSTRAINT `fk_detalleformula_formula1` FOREIGN KEY (`formula_idFormula`) REFERENCES `formula` (`idFormula`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_detalleformula_medicamento1` FOREIGN KEY (`medicamento_idMedicamento`) REFERENCES `medicamento` (`idMedicamento`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `formula`
--
ALTER TABLE `formula`
  ADD CONSTRAINT `fk_formula_medico1` FOREIGN KEY (`medico_idtblMedico`) REFERENCES `medico` (`idMedico`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_formula_paciente1` FOREIGN KEY (`paciente_idPaciente`) REFERENCES `paciente` (`idPaciente`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `historiaclinica`
--
ALTER TABLE `historiaclinica`
  ADD CONSTRAINT `fk_tblHistoriaClinica_tblMedico1` FOREIGN KEY (`idMedico`) REFERENCES `medico` (`idMedico`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_tblHistoriaClinica_tblPaciente1` FOREIGN KEY (`idPaciente`) REFERENCES `paciente` (`idPaciente`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `medicamento`
--
ALTER TABLE `medicamento`
  ADD CONSTRAINT `fk_medicamento_Entrada1` FOREIGN KEY (`Entrada_idmovimientosMedicamentos`) REFERENCES `entrada` (`idmovimientosMedicamentos`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `fk_tblUsuario_tblRol1` FOREIGN KEY (`Rol_idRol`) REFERENCES `rol` (`idRol`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
