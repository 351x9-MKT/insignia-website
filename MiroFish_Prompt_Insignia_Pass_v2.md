# Prompt v2 (endurecido) para MiroFish — Piloto Insignia Pass

> **Por qué v2:** la primera corrida (con modelo local) devolvió un eco de los seeds, en chino, sin números ni escenarios. Esta versión corrige eso: fuerza idioma, exige predicciones cuantificadas, prohíbe citar el seed como conclusión, y obliga a entregar tabla de escenarios + trayectorias + señales tempranas + sensibilidad. Úsala con el backend de OpenAI.

---

## 0. Antes de pegar el prompt: verifica 3 cosas

1. **Que el backend sea el de OpenAI** (un modelo capaz, p. ej. GPT-4o/4.1 o superior). Es el factor #1 de calidad.
2. **Que se hayan cargado los 5 seeds** (Manifiesto, Benchmark, Casos Análogos, Datos del benchmark, Resumen). El prompt le pedirá que liste cuáles leyó — si no los nombra todos, vuelve a cargarlos.
3. **Que el idioma de salida quede en español** (lo forzamos en el prompt, pero si la UI tiene un selector, ponlo en español también).

---

## 1. Prompt (pégalo tal cual)

```
INSTRUCCIONES DE SALIDA (OBLIGATORIAS — léelas primero)
1. Responde SIEMPRE en español. No uses chino ni ningún otro idioma.
2. Tu trabajo NO es resumir ni citar los materiales semilla. Los seeds son ENTRADA (contexto). Tu salida deben ser PREDICCIONES NUEVAS generadas por la simulación. Está PROHIBIDO presentar una cita del seed como si fuera un hallazgo.
3. CADA predicción debe incluir: (a) un número o rango numérico concreto, (b) un nivel de confianza (Alto/Medio/Bajo + % aproximado), y (c) el razonamiento causal de POR QUÉ los agentes simulados produjeron ese resultado.
4. Si no puedes derivar un número de la simulación, NO lo omitas: declara tus supuestos explícitos y entrega igualmente un rango estimado.
5. Prohibido repetir frases genéricas de relleno (p. ej. "necesita seguir innovando y adaptarse al mercado"). Cada frase debe aportar información nueva.
6. Al inicio del reporte, lista qué archivos semilla efectivamente usaste. Si faltó alguno, indícalo.

ROL Y OBJETIVO
Eres un motor de simulación de mercado multi-agente. Con los materiales semilla, construye un mundo digital de alta fidelidad del mercado mexicano de eventos en vivo y boletería (2026-2029) y SIMULA la interacción de los agentes para predecir cómo reaccionaría el mercado al lanzamiento de "Insignia Pass" (boletera + ecosistema premium de la casa productora Insignia Entertainment).

MUNDO DIGITAL
- Geografía: México (foco CDMX, Monterrey, Guadalajara). Horizonte: 36 meses.
- Contexto: Ticketmaster-OCESA domina (cargo 24%); Boletia lidera el segmento independiente (12% + $5 MXN). 80% boletos digitales. Alta frustración por comisiones y fraude (5,652 quejas Profeco 2022-2024). Senado discute topes a comisiones.

AGENTES (poblaciones con personalidad, memoria y lógica propia; haz que INTERACTÚEN, no que resuman)
- Fans: superfan/early-adopter; casual sensible al precio; comprador familiar; joven mobile-first (18-28).
- Promotores: independiente mediano (hoy en Boletia); grande (atado a Ticketmaster/OCESA); emergente/nicho.
- Competidores que reaccionan: Ticketmaster-OCESA, Boletia, Eventbrite, Superboletos.
- Artistas y venues (secundarios). Regulador (Profeco/Senado) como fuerza externa.

ESCENARIOS A SIMULAR (corre cada combinación y compáralas)
- Cargo de servicio Insignia Pass: 8% vs 10% vs 12%.
- Precio membresía "Insignia+": $199 vs $299 vs $399 MXN/mes.
- Modelo "sin booking fee al fan, comisión al promotor" vs modelo tradicional con cargo al fan.
- Liquidación al promotor: T+3 vs T+7.
- Lanzamiento: solo eventos propios de Insignia (Año 1) vs apertura inmediata a terceros.
- Respuesta de Boletia: baja su comisión a 9% vs no reacciona.
- Regulación: Senado topa comisiones a 15% vs no pasa nada.

LAS 8 PREDICCIONES (responde una por una, cada una con número + confianza + razonamiento)
1. Adopción de fans a 12, 24 y 36 meses (% del mercado objetivo capturado en cada hito).
2. Ranking de los 4 diferenciadores por impacto en conversión y lealtad (boletera de productores / ecosistema 360° / membresía premium / bundles experienciales). Justifica el orden con la dinámica simulada.
3. Willingness-to-pay de la membresía: ¿qué precio maximiza el ingreso recurrente sin matar adopción? Da el % de fans que se suscribiría a $199, $299 y $399.
4. Migración de promotores independientes desde Boletia hacia Insignia Pass en 24 meses (% y número estimado).
5. Reacción de Boletia y Ticketmaster: probabilidad (%) de cada respuesta — bajar comisión / copiar features / ignorar — y el efecto neto sobre Insignia Pass.
6. Punto de quiebre: ¿a qué nivel de comisión o precio de membresía el modelo deja de ser atractivo para fans o promotores?
7. El riesgo #1 que, según la simulación, podría hacer fracasar el lanzamiento, con su probabilidad estimada.
8. La estrategia de lanzamiento óptima entre los escenarios probados, con la justificación cuantitativa.

ENTREGABLES OBLIGATORIOS (además de las 8 predicciones)
A. TABLA de escenarios de precio/comisión: filas = combinaciones probadas; columnas = adopción 24m (%), ingreso anual estimado (MXN), riesgo (Alto/Medio/Bajo). Mínimo 6 filas.
B. Las 3 TRAYECTORIAS de futuro (optimista / base / pesimista) a 36 meses, cada una con su probabilidad (%) y los supuestos que la definen.
C. SEÑALES TEMPRANAS: 5-8 indicadores observables en el mundo real que dirían hacia qué trayectoria vamos.
D. SENSIBILIDAD: qué variable, al moverla, cambia más el resultado (ordena las 3 más sensibles).

FORMATO
Markdown, en español, con encabezados claros. Sin relleno. Si una cifra es incierta, exprésala como rango con su supuesto.
```

---

## 2. Si quieres correrlo en inglés (a veces los modelos cuantifican mejor en inglés)

Pega el mismo prompt pero cambia la línea 1 de las INSTRUCCIONES DE SALIDA por: *"Always respond in English."* — y traduce las secciones. (Si lo necesitas en inglés completo, dímelo y te lo dejo armado.)

---

## 3. Cómo evaluaremos la corrida v2

Cuando te arroje el nuevo reporte, lo cruzo contra nuestro análisis y reviso específicamente:
- ¿Entregó los 8 números con confianza, o volvió a hacer eco? (criterio de aprobado/reprobado)
- ¿Sus cifras de adopción y willingness-to-pay son plausibles vs. los benchmarks reales (DICE, Fever, Boletia)?
- ¿La tabla de escenarios apunta a un precio/comisión ganador consistente?
- ¿Las señales tempranas son accionables (algo que de verdad podamos monitorear)?
- ¿Aparece algún riesgo o dinámica que NO habíamos considerado? (ese es el verdadero valor)

Tráeme el reporte y te entrego el cruce.
