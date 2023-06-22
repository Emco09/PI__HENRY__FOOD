const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
//En resumen, este código proporciona una forma de capturar y reportar métricas de rendimiento web utilizando la biblioteca web-vitals y una función de devolución de llamada proporcionada a través del parámetro onPerfEntry.