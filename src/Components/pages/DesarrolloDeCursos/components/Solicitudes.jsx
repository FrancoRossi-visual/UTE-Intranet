function Solicitudes({ Solicitudes }) {
  return (
    <section>
      {Solicitudes ? (
        <h2>solicitudes</h2>
      ) : (
        <h2>Respire: no hay solicitudes para asignar</h2>
      )}
    </section>
  );
}

export default Solicitudes;
