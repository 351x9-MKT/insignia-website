# Prompt para MiroFish — Piloto de simulación Insignia Pass

> **Cómo usar este documento:** súbele a MiroFish los archivos semilla listados abajo y pega el prompt de la sección 2 como tu "prediction requirement". Si el motor responde mejor en inglés que en español, en la sección 3 tienes la versión en inglés.

---

## 1. Materiales semilla a subir (en este orden de prioridad)

Sube estos archivos de tu carpeta de Insignia Entertainment como seed materials:

1. **Insignia_Pass_Manifiesto_Estrategico.docx** — define la visión, diferenciadores, modelo de ecosistema y ADN del proyecto. Es el documento más importante para que los agentes "entiendan" qué es Insignia Pass.
2. **Insignia_Pass_Benchmark_Boleteras.docx** — el estado real del mercado mexicano (competidores, comisiones, dolor del usuario).
3. **Insignia_Pass_Casos_Analogos.docx** — aprendizajes de DICE, Fever, Live Nation, Shotgun, RA. Da a los agentes contexto de cómo se han comportado mercados similares.
4. (Opcional) **Insignia_Pass_Benchmark_Boleteras.xlsx** — la matriz de datos comparativos por si acepta tablas.

---

## 2. Prompt (versión español)

```
ROL Y OBJETIVO
Eres un motor de simulación de mercado. Con los materiales semilla adjuntos, construye un mundo digital de alta fidelidad que represente el mercado mexicano de eventos en vivo y boletería en 2026-2028. Tu objetivo es predecir cómo reaccionarían los distintos actores del mercado al lanzamiento de "Insignia Pass", una nueva plataforma de boletería + ecosistema premium creada por la casa productora Insignia Entertainment.

MUNDO DIGITAL A CONSTRUIR
- Geografía: México, con foco en CDMX, Monterrey y Guadalajara.
- Horizonte temporal: 36 meses desde el lanzamiento (mediados de 2026 a mediados de 2029).
- Contexto: mercado dominado por Ticketmaster-OCESA (cargo 24%), con Boletia liderando el segmento independiente (12% + $5 MXN). 80% de boletos ya son digitales. Alta frustración del consumidor por comisiones y fraude (5,652 quejas a Profeco 2022-2024). Senado discute topes a comisiones.

AGENTES A SIMULAR (crea poblaciones con personalidad, memoria y lógica propia)
1. FANS por segmento:
   - Fan superfan/early-adopter (asiste a 6+ eventos/año, sigue artistas, gasta en experiencias).
   - Fan casual (1-3 eventos/año, sensible al precio).
   - Fan familiar (compra para grupos, valora confianza y servicio).
   - Fan joven mobile-first (18-28, descubre música en streaming, comparte en redes).
2. PROMOTORES:
   - Promotor independiente mediano (usa Boletia hoy, busca mejores márgenes).
   - Promotor grande (depende de Ticketmaster/OCESA, averso al riesgo).
   - Promotor emergente/nicho (eventos pequeños, busca herramientas accesibles).
3. COMPETIDORES (reaccionan estratégicamente):
   - Ticketmaster-OCESA, Boletia, Eventbrite, Superboletos.
4. ARTISTAS y VENUES como actores secundarios.
5. REGULADOR (Profeco / Senado) como fuerza externa.

VARIABLES QUE QUIERO PODER INYECTAR Y PROBAR (corre escenarios)
- Precio del cargo por servicio de Insignia Pass: 8% vs 10% vs 12%.
- Precio de la membresía premium "Insignia+": $199 vs $299 vs $399 MXN/mes.
- Modelo "sin booking fee al fan, comisión al promotor" vs modelo tradicional.
- Velocidad de liquidación al promotor: T+3 vs T+7.
- Estrategia de lanzamiento: solo eventos propios de Insignia (Año 1) vs apertura inmediata a terceros.
- Respuesta competitiva: Boletia baja su comisión a 9% vs no reacciona.
- Escenario regulatorio: el Senado impone tope de 15% a comisiones vs no pasa nada.

PREDICCIONES QUE NECESITO (responde cada una con número estimado + nivel de confianza + razonamiento)
1. Tasa de adopción de fans en los primeros 12, 24 y 36 meses (% del mercado objetivo capturado).
2. ¿Cuál de los 4 diferenciadores (boletera de productores / ecosistema 360° / membresía premium / bundles experienciales) genera mayor conversión y lealtad? Ranking.
3. Willingness-to-pay de la membresía premium: ¿qué precio maximiza ingreso recurrente sin matar adopción? ¿Qué % de fans se suscribiría a cada precio?
4. Tasa de migración de promotores independientes desde Boletia hacia Insignia Pass en 24 meses.
5. ¿Cómo reaccionan Boletia y Ticketmaster? ¿Bajan comisiones, copian features, ignoran? Probabilidad de cada respuesta.
6. Punto de quiebre: ¿en qué nivel de comisión o precio de membresía el modelo deja de ser atractivo para fans o promotores?
7. Riesgo principal que podría hacer fracasar el lanzamiento, según la dinámica simulada.
8. Recomendación de la estrategia de lanzamiento óptima entre los escenarios probados.

FORMATO DE SALIDA
- Un reporte ejecutivo con las 8 predicciones, cada una con su número estimado, intervalo y confianza.
- Una tabla comparando los escenarios de precio/comisión y su resultado simulado (adopción, ingreso, riesgo).
- Las 3 trayectorias de futuro más probables (optimista, base, pesimista) con su probabilidad.
- Una lista de las "señales tempranas" que debería monitorear en el mundo real para saber si vamos hacia el escenario optimista o el pesimista.
- Las decisiones más sensibles: qué variable, si la movemos, cambia más el resultado.
```

---

## 3. Prompt (versión inglés — usa esta si MiroFish predice mejor en inglés)

```
ROLE & GOAL
You are a market simulation engine. Using the attached seed materials, build a high-fidelity digital world representing the Mexican live-events and ticketing market in 2026-2028. Your goal is to predict how different market actors would react to the launch of "Insignia Pass", a new ticketing platform + premium fan ecosystem created by the production house Insignia Entertainment.

DIGITAL WORLD
- Geography: Mexico, focused on Mexico City, Monterrey, Guadalajara.
- Time horizon: 36 months from launch (mid-2026 to mid-2029).
- Context: market dominated by Ticketmaster-OCESA (24% service fee), with Boletia leading the independent segment (12% + $5 MXN). 80% of tickets already digital. High consumer frustration over fees and fraud (5,652 Profeco complaints 2022-2024). Senate debating fee caps.

AGENTS TO SIMULATE (create populations with distinct personality, memory, and behavioral logic)
1. FANS by segment: superfan/early-adopter; price-sensitive casual; family buyer; young mobile-first (18-28).
2. PROMOTERS: mid-size independent (currently on Boletia); large (dependent on Ticketmaster/OCESA, risk-averse); emerging/niche.
3. COMPETITORS that react strategically: Ticketmaster-OCESA, Boletia, Eventbrite, Superboletos.
4. ARTISTS and VENUES as secondary actors.
5. REGULATOR (Profeco / Senate) as external force.

VARIABLES TO INJECT AND TEST (run scenarios)
- Insignia Pass service fee: 8% vs 10% vs 12%.
- Premium membership "Insignia+" price: $199 vs $299 vs $399 MXN/month.
- "No booking fee to fan, commission to promoter" vs traditional model.
- Promoter payout speed: T+3 vs T+7.
- Launch strategy: Insignia's own events only (Year 1) vs immediate third-party opening.
- Competitive response: Boletia drops fee to 9% vs no reaction.
- Regulatory scenario: Senate caps fees at 15% vs nothing happens.

PREDICTIONS NEEDED (answer each with estimated number + confidence level + reasoning)
1. Fan adoption rate at 12, 24, 36 months (% of target market captured).
2. Which of the 4 differentiators (producer-built ticketing / 360° fan ecosystem / premium membership / experiential bundles) drives the most conversion and loyalty? Rank them.
3. Willingness-to-pay for premium membership: which price maximizes recurring revenue without killing adoption? % of fans subscribing at each price.
4. Migration rate of independent promoters from Boletia to Insignia Pass over 24 months.
5. How do Boletia and Ticketmaster react? Probability of each response (cut fees / copy features / ignore).
6. Breaking point: at what fee or membership price does the model stop being attractive?
7. Main risk that could make the launch fail, per simulated dynamics.
8. Recommended optimal launch strategy among tested scenarios.

OUTPUT FORMAT
- Executive report with the 8 predictions (estimate, range, confidence each).
- A table comparing price/fee scenarios and their simulated outcome (adoption, revenue, risk).
- The 3 most likely future trajectories (optimistic, base, pessimistic) with probabilities.
- A list of "early signals" to monitor in the real world to know which trajectory we're heading toward.
- The most sensitive decisions: which single variable, if moved, changes the outcome the most.
```

---

## 4. Cómo interpretar los resultados (importante)

MiroFish es una **herramienta de hipótesis, no un oráculo**. Sus predicciones son simulaciones basadas en cómo el modelo cree que se comportarían los agentes — útiles para detectar dinámicas y riesgos, NO para tomarlas como verdad literal. Cuando tengas los resultados:

- Compáralos con la realidad que ya conocemos del benchmark (datos duros vs. simulación).
- Trata los números como rangos direccionales, no como certezas.
- Lo más valioso suele ser el **razonamiento** de por qué los agentes reaccionan así, y las **señales tempranas** a monitorear.
- Tráeme el reporte que arroje y lo cruzamos contra nuestro análisis para separar lo que confirma, lo que contradice y lo que descubre.
