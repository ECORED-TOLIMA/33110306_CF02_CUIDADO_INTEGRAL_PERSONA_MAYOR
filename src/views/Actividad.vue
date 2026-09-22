<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión de los conceptos, estrategias y prácticas relacionadas con el bienestar, la seguridad, la participación, la movilización, la comunicación, la satisfacción y la proyección del servicio de cuidado de la persona mayor.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál de las siguientes acciones favorece el bienestar de la persona mayor?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Facilitar su participación según sus capacidades.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Realizar todas sus actividades cotidianas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Decidir siempre por ella.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar que realice actividades.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos del cuidado integral de la persona mayor. Continúe fortaleciendo sus conocimientos para brindar un cuidado seguro, respetuoso y centrado en la persona.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto: '¿Qué diferencia existe entre tiempo libre y ocio?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El ocio corresponde a las obligaciones y el tiempo libre al descanso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El tiempo libre es el tiempo disponible y el ocio su uso voluntario y significativo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El tiempo libre solo comprende actividades físicas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El ocio corresponde exclusivamente a actividades sociales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos del cuidado integral de la persona mayor. Continúe fortaleciendo sus conocimientos para brindar un cuidado seguro, respetuoso y centrado en la persona.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de las siguientes opciones representa una red de apoyo para la persona mayor?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente el cuidador.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Únicamente la familia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Familia, comunidad y entidades institucionales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Solamente los servicios de salud.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos del cuidado integral de la persona mayor. Continúe fortaleciendo sus conocimientos para brindar un cuidado seguro, respetuoso y centrado en la persona.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es una medida adecuada para favorecer la seguridad en el hogar?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mantener cables atravesados en las zonas de paso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Guardar los objetos de uso frecuente en lugares difíciles de alcanzar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Utilizar superficies húmedas para facilitar la limpieza.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mantener libres y despejadas las zonas de circulación.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos del cuidado integral de la persona mayor. Continúe fortaleciendo sus conocimientos para brindar un cuidado seguro, respetuoso y centrado en la persona.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Cuál condición física del ambiente contribuye a un entorno adecuado para la persona mayor?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ruido intenso y permanente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Olores fuertes y persistentes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Iluminación suficiente y adecuada.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reflejos luminosos constantes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos del cuidado integral de la persona mayor. Continúe fortaleciendo sus conocimientos para brindar un cuidado seguro, respetuoso y centrado en la persona.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: '¿Qué diferencia existe entre limpieza y desinfección?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La limpieza elimina toda contaminación y la desinfección solo retira suciedad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La limpieza retira suciedad y la desinfección actúa sobre microorganismos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ambas corresponden exactamente al mismo proceso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La desinfección siempre se realiza antes de limpiar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos del cuidado integral de la persona mayor. Continúe fortaleciendo sus conocimientos para brindar un cuidado seguro, respetuoso y centrado en la persona.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Cuál precaución debe aplicarse durante el uso de productos de limpieza y desinfección?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Seguir las instrucciones del fabricante.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Mezclar productos para aumentar su efecto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Utilizar cualquier concentración disponible.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Almacenar los productos en recipientes sin identificar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos del cuidado integral de la persona mayor. Continúe fortaleciendo sus conocimientos para brindar un cuidado seguro, respetuoso y centrado en la persona.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Cuál principio de mecánica corporal ayuda a realizar una movilización de manera segura?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Girar el tronco mientras se sostiene una carga.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mantener los pies juntos durante todo el movimiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Alejar la carga del cuerpo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mantener una base estable y distribuir el peso.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos del cuidado integral de la persona mayor. Continúe fortaleciendo sus conocimientos para brindar un cuidado seguro, respetuoso y centrado en la persona.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            'Antes de movilizar a una persona mayor, ¿qué acción debe realizar el cuidador?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Realizar el movimiento sin explicarlo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Valorar sus capacidades y preparar el espacio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Tirar de los brazos para iniciar el movimiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Impedir que participe en el movimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos del cuidado integral de la persona mayor. Continúe fortaleciendo sus conocimientos para brindar un cuidado seguro, respetuoso y centrado en la persona.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Cuál estrategia favorece una comunicación adecuada con la persona mayor?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Hablar rápidamente para terminar la conversación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Interrumpir para anticipar sus respuestas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Escuchar activamente y respetar su tiempo de respuesta.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Utilizar expresiones infantilizadas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos del cuidado integral de la persona mayor. Continúe fortaleciendo sus conocimientos para brindar un cuidado seguro, respetuoso y centrado en la persona.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Qué significa brindar un acompañamiento respetuoso a la persona mayor?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Decidir qué actividades debe realizar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Proporcionar el apoyo necesario respetando sus decisiones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Realizar todas las actividades por ella.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar que exprese desacuerdos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos del cuidado integral de la persona mayor. Continúe fortaleciendo sus conocimientos para brindar un cuidado seguro, respetuoso y centrado en la persona.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Cuál acción favorece la autonomía de la persona mayor durante una actividad cotidiana?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permitir que realice las acciones que puede hacer por sí misma.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Realizar la actividad completa aunque no necesite ayuda.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Imponer una única forma de realizar la actividad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar que tome decisiones durante la actividad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos del cuidado integral de la persona mayor. Continúe fortaleciendo sus conocimientos para brindar un cuidado seguro, respetuoso y centrado en la persona.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Qué permite conocer la valoración de la satisfacción de la persona mayor?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solamente su estado físico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Su percepción frente a las actividades realizadas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Únicamente las actividades que debe realizar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo las preferencias del cuidador.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos del cuidado integral de la persona mayor. Continúe fortaleciendo sus conocimientos para brindar un cuidado seguro, respetuoso y centrado en la persona.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Cuál técnica puede utilizarse para valorar la satisfacción de la persona mayor?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Utilizar preguntas y escalas sencillas de satisfacción.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Imponer una actividad sin consultar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ignorar sus comentarios durante la actividad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evaluar únicamente la opinión del cuidador.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos del cuidado integral de la persona mayor. Continúe fortaleciendo sus conocimientos para brindar un cuidado seguro, respetuoso y centrado en la persona.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            'Después de identificar que una actividad genera incomodidad en la persona mayor, ¿qué corresponde hacer?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mantenerla sin realizar cambios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Suspender todas las actividades de bienestar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ignorar la percepción expresada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Analizar la situación y realizar los ajustes necesarios.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos del cuidado integral de la persona mayor. Continúe fortaleciendo sus conocimientos para brindar un cuidado seguro, respetuoso y centrado en la persona.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: '¿Cuál acción hace parte del autocuidado del cuidador?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ignorar las señales de cansancio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Asumir todas las responsabilidades sin pedir apoyo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mantener espacios de descanso y actividades personales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Evitar cualquier actividad de recreación personal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos del cuidado integral de la persona mayor. Continúe fortaleciendo sus conocimientos para brindar un cuidado seguro, respetuoso y centrado en la persona.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Cuál elemento es importante al presentar un servicio de cuidado?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Describir claramente los servicios ofrecidos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Garantizar resultados relacionados con la salud.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ofrecer procedimientos profesionales sin formación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ocultar las condiciones del servicio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos del cuidado integral de la persona mayor. Continúe fortaleciendo sus conocimientos para brindar un cuidado seguro, respetuoso y centrado en la persona.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Qué característica debe tener la promoción de un servicio de cuidado?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Exagerada y difícil de comprobar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Clara, veraz y responsable.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Basada en promesas de curación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Centrada exclusivamente en las necesidades del cuidador.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos del cuidado integral de la persona mayor. Continúe fortaleciendo sus conocimientos para brindar un cuidado seguro, respetuoso y centrado en la persona.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Cuál información puede incluir una pieza publicitaria de un servicio de cuidado?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diagnósticos médicos garantizados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Promesas de recuperación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Servicios ofrecidos y datos de contacto.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Procedimientos clínicos no autorizados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos del cuidado integral de la persona mayor. Continúe fortaleciendo sus conocimientos para brindar un cuidado seguro, respetuoso y centrado en la persona.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es el propósito de fortalecer continuamente las capacidades del cuidador mediante capacitaciones?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sustituir a todos los profesionales de la salud.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Ampliar conocimientos y fortalecer habilidades para el cuidado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Realizar procedimientos fuera de sus competencias.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar la necesidad de actualizar conocimientos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos del cuidado integral de la persona mayor. Continúe fortaleciendo sus conocimientos para brindar un cuidado seguro, respetuoso y centrado en la persona.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
    parrafo: {
      tema: 'Comprendiendo el diseño de presupuestos y estrategias de ahorro',
      titulo: 'Completar frases',
      introduccion:
        '<b> Objetivo:</b> identificar conceptos clave relacionados con el presupuesto personal, la cultura del ahorro y la planificación financiera.',
      instruccion:
        'Complete correctamente los enunciados con la palabra que falta según los contenidos estudiados en el componente formativo.',
      imagen: '@/assets/actividad/imagen1.png',
      barajarPreguntas: true,
      textos: [
        {
          id: 1,
          texto:
            'El [respuesta] personal es una herramienta que permite proyectar ingresos y egresos para mantener la estabilidad económica.',
          respuesta: 'presupuesto',
        },
        {
          id: 2,
          texto:
            'La constancia en el cumplimiento del presupuesto refleja un alto nivel de [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 3,
          texto:
            'Ahorrar no es lo que sobra, sino lo que se [respuesta] guardar antes de gastar.',
          respuesta: 'planifica',
        },
        {
          id: 4,
          texto:
            'Un gasto innecesario que puede eliminarse sin afectar la calidad de vida básica se denomina gasto [respuesta].',
          respuesta: 'discrecional',
        },
        {
          id: 5,
          texto:
            'La cultura del ahorro promueve el uso responsable de los [respuesta] disponibles.',
          respuesta: 'recursos',
        },
        {
          id: 6,
          texto:
            'El estado de [respuesta] personales permite analizar la relación entre ingresos y egresos en un periodo determinado.',
          respuesta: 'resultados',
        },
        {
          id: 7,
          texto:
            'Cuando los ingresos son mayores que los egresos se generan una [respuesta] que puede destinarse al ahorro.',
          respuesta: 'utilidad',
        },
        {
          id: 8,
          texto:
            'Uno de los beneficios de ejecutar un presupuesto es la reducción del [respuesta] financiero.',
          respuesta: 'estrés',
        },
        {
          id: 9,
          texto:
            'Evitar gastos impulsivos y mantener límites presupuestales refleja [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 10,
          texto:
            'Contar con un fondo de [respuesta] permite enfrentar gastos inesperados sin afectar el presupuesto.',
          respuesta: 'emergencia',
        },
      ],
    },
  }),
}
</script>
