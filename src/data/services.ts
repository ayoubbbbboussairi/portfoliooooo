/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  Bug as fix_bug,
  DatabaseZap as database_management,
  Rocket as performance,
  Server as system_design,
  Workflow as api_integaration,
  ShieldCheck as security,
} from "lucide-react";

// ==================[ services ]================== //
export const services = [
  // 1
  {
    service: "Sûreté & Risques",
    description:
      "Réalisation d'analyses de risques approfondies (AMDEC, HAZOP, APR) et modélisation d'arbres de défaillance (FTA) pour garantir la sécurité et la conformité des installations nucléaires.",
    Icon: security,
  },

  // 2
  {
    service: "Simulation Numérique",
    description:
      "Modélisation thermohydraulique et simulations CFD pour valider les performances des systèmes et prédire les comportements en situations accidentelles ou nominales.",
    Icon: system_design,
  },

  // 3
  {
    service: "Ingénierie Système",
    description:
      "Conception et dimensionnement de systèmes complexes (circuits de refroidissement, ventilation nucléaire), de la faisabilité jusqu'à l'optimisation opérationnelle.",
    Icon: performance,
  },

  // 4
  {
    service: "Analyse de Données",
    description:
      "Développement de scripts (Python, Matlab) pour le traitement de données expérimentales, l'automatisation de calculs et la création de bilans techniques.",
    Icon: database_management,
  },
] as any[];
//
