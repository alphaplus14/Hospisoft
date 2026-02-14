-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-02-2026 a las 14:14:18
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `hospisoft`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tblcitas`
--

CREATE TABLE `tblcitas` (
  `idCitas` int(11) NOT NULL,
  `fechaCita` datetime NOT NULL,
  `estado` varchar(200) NOT NULL,
  `tipoSolicitudCita` varchar(200) NOT NULL,
  `tblMedico_idMedico` int(11) NOT NULL,
  `tblPaciente_idPaciente` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tblformulamedica`
--

CREATE TABLE `tblformulamedica` (
  `idFormula` int(11) NOT NULL,
  `fechaFormula` date NOT NULL,
  `indicacionesFormula` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tblhistoriaclinica`
--

CREATE TABLE `tblhistoriaclinica` (
  `idHistoriaClinica` int(11) NOT NULL,
  `fechaHistoriaClinica` date NOT NULL,
  `diagnosticoHistoriaClinica` varchar(200) NOT NULL,
  `observacionesHistoriaClinica` varchar(200) NOT NULL,
  `tblMedico_idMedico` int(11) NOT NULL,
  `tblPaciente_idPaciente` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tblhistoriaclinica_has_tblformulamedica`
--

CREATE TABLE `tblhistoriaclinica_has_tblformulamedica` (
  `tblHistoriaClinica_idHistoriaClinica` int(11) NOT NULL,
  `tblFormulaMedica_idFormula` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tblmedicamento`
--

CREATE TABLE `tblmedicamento` (
  `idMedicamentos` int(11) NOT NULL,
  `nombreMedicamento` varchar(200) NOT NULL,
  `cantidadMedicamento` int(11) NOT NULL,
  `precioMedicamento` int(11) NOT NULL,
  `fechaVencimiento` date NOT NULL,
  `tblFormulaMedica_idFormula` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tblmedico`
--

CREATE TABLE `tblmedico` (
  `idMedico` int(11) NOT NULL,
  `nombreMedico` varchar(200) NOT NULL,
  `especialidadMedico` varchar(200) NOT NULL,
  `celularMedico` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `tblmedico`
--

INSERT INTO `tblmedico` (`idMedico`, `nombreMedico`, `especialidadMedico`, `celularMedico`) VALUES
(1, 'Carlos Ramírez', 'Cardiología', '3001234567'),
(3, 'Andrés Martínez', 'Dermatología', '3023456789'),
(4, 'Diana Torres', 'Ginecología', '3034567890'),
(5, 'Felipe Castro', 'Neurología', '3045678901'),
(6, 'Mariana López', 'Medicina General', '3056789012'),
(7, 'Julián Herrera', 'Ortopedia', '3067890123'),
(8, 'Valentina Rojas', 'Oftalmología', '3078901234'),
(9, 'Santiago Moreno', 'Urología', '3089012345'),
(10, 'Camila Vargas', 'Psicología', '3090123456');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tblpaciente`
--

CREATE TABLE `tblpaciente` (
  `idPaciente` int(11) NOT NULL,
  `nombrePaciente` varchar(200) NOT NULL,
  `documentoPaciente` varchar(200) NOT NULL,
  `celularPaciente` varchar(200) NOT NULL,
  `emailPaciente` varchar(200) NOT NULL,
  `fechaNacimientoPaciente` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tblrol`
--

CREATE TABLE `tblrol` (
  `idRol` int(11) NOT NULL,
  `nombreRol` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tblusuario`
--

CREATE TABLE `tblusuario` (
  `idUsuario` int(11) NOT NULL,
  `nombreUsuario` varchar(200) NOT NULL,
  `correoUsuario` varchar(200) NOT NULL,
  `passwordUsuario` varchar(200) NOT NULL,
  `tblRol_idRol` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tblcitas`
--
ALTER TABLE `tblcitas`
  ADD PRIMARY KEY (`idCitas`),
  ADD KEY `fk_tblCitas_tblMedico1_idx` (`tblMedico_idMedico`),
  ADD KEY `fk_tblCitas_tblPaciente1_idx` (`tblPaciente_idPaciente`);

--
-- Indices de la tabla `tblformulamedica`
--
ALTER TABLE `tblformulamedica`
  ADD PRIMARY KEY (`idFormula`);

--
-- Indices de la tabla `tblhistoriaclinica`
--
ALTER TABLE `tblhistoriaclinica`
  ADD PRIMARY KEY (`idHistoriaClinica`),
  ADD KEY `fk_tblHistoriaClinica_tblMedico1_idx` (`tblMedico_idMedico`),
  ADD KEY `fk_tblHistoriaClinica_tblPaciente1_idx` (`tblPaciente_idPaciente`);

--
-- Indices de la tabla `tblhistoriaclinica_has_tblformulamedica`
--
ALTER TABLE `tblhistoriaclinica_has_tblformulamedica`
  ADD PRIMARY KEY (`tblHistoriaClinica_idHistoriaClinica`,`tblFormulaMedica_idFormula`),
  ADD KEY `fk_tblHistoriaClinica_has_tblFormulaMedica_tblFormulaMedica_idx` (`tblFormulaMedica_idFormula`),
  ADD KEY `fk_tblHistoriaClinica_has_tblFormulaMedica_tblHistoriaClini_idx` (`tblHistoriaClinica_idHistoriaClinica`);

--
-- Indices de la tabla `tblmedicamento`
--
ALTER TABLE `tblmedicamento`
  ADD PRIMARY KEY (`idMedicamentos`),
  ADD KEY `fk_tblMedicamento_tblFormulaMedica1_idx` (`tblFormulaMedica_idFormula`);

--
-- Indices de la tabla `tblmedico`
--
ALTER TABLE `tblmedico`
  ADD PRIMARY KEY (`idMedico`),
  ADD UNIQUE KEY `idtblMedico_UNIQUE` (`idMedico`);

--
-- Indices de la tabla `tblpaciente`
--
ALTER TABLE `tblpaciente`
  ADD PRIMARY KEY (`idPaciente`),
  ADD UNIQUE KEY `documentoPaciente_UNIQUE` (`documentoPaciente`),
  ADD UNIQUE KEY `emailPaciente_UNIQUE` (`emailPaciente`),
  ADD UNIQUE KEY `idtblPaciente_UNIQUE` (`idPaciente`);

--
-- Indices de la tabla `tblrol`
--
ALTER TABLE `tblrol`
  ADD PRIMARY KEY (`idRol`);

--
-- Indices de la tabla `tblusuario`
--
ALTER TABLE `tblusuario`
  ADD PRIMARY KEY (`idUsuario`),
  ADD UNIQUE KEY `correoUsuario_UNIQUE` (`correoUsuario`),
  ADD KEY `fk_tblUsuario_tblRol1_idx` (`tblRol_idRol`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tblcitas`
--
ALTER TABLE `tblcitas`
  MODIFY `idCitas` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tblformulamedica`
--
ALTER TABLE `tblformulamedica`
  MODIFY `idFormula` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tblhistoriaclinica`
--
ALTER TABLE `tblhistoriaclinica`
  MODIFY `idHistoriaClinica` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tblmedicamento`
--
ALTER TABLE `tblmedicamento`
  MODIFY `idMedicamentos` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tblmedico`
--
ALTER TABLE `tblmedico`
  MODIFY `idMedico` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `tblpaciente`
--
ALTER TABLE `tblpaciente`
  MODIFY `idPaciente` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tblrol`
--
ALTER TABLE `tblrol`
  MODIFY `idRol` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tblusuario`
--
ALTER TABLE `tblusuario`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `tblcitas`
--
ALTER TABLE `tblcitas`
  ADD CONSTRAINT `fk_tblCitas_tblMedico1` FOREIGN KEY (`tblMedico_idMedico`) REFERENCES `tblmedico` (`idMedico`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_tblCitas_tblPaciente1` FOREIGN KEY (`tblPaciente_idPaciente`) REFERENCES `tblpaciente` (`idPaciente`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `tblhistoriaclinica`
--
ALTER TABLE `tblhistoriaclinica`
  ADD CONSTRAINT `fk_tblHistoriaClinica_tblMedico1` FOREIGN KEY (`tblMedico_idMedico`) REFERENCES `tblmedico` (`idMedico`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_tblHistoriaClinica_tblPaciente1` FOREIGN KEY (`tblPaciente_idPaciente`) REFERENCES `tblpaciente` (`idPaciente`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `tblhistoriaclinica_has_tblformulamedica`
--
ALTER TABLE `tblhistoriaclinica_has_tblformulamedica`
  ADD CONSTRAINT `fk_tblHistoriaClinica_has_tblFormulaMedica_tblFormulaMedica1` FOREIGN KEY (`tblFormulaMedica_idFormula`) REFERENCES `tblformulamedica` (`idFormula`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_tblHistoriaClinica_has_tblFormulaMedica_tblHistoriaClinica1` FOREIGN KEY (`tblHistoriaClinica_idHistoriaClinica`) REFERENCES `tblhistoriaclinica` (`idHistoriaClinica`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `tblmedicamento`
--
ALTER TABLE `tblmedicamento`
  ADD CONSTRAINT `fk_tblMedicamento_tblFormulaMedica1` FOREIGN KEY (`tblFormulaMedica_idFormula`) REFERENCES `tblformulamedica` (`idFormula`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `tblusuario`
--
ALTER TABLE `tblusuario`
  ADD CONSTRAINT `fk_tblUsuario_tblRol1` FOREIGN KEY (`tblRol_idRol`) REFERENCES `tblrol` (`idRol`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
