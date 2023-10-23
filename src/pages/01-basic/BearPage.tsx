import { useShallow } from "zustand/react/shallow";

//* COMPONENTS *//
import { WhiteCard } from "../../components";

//* STORES *//
import { useBearsStore } from "../../stores";

export const BearPage = () => {
  return (
    <>
      <h1>Contador de Osos</h1>
      <p>Manejo de estado simple de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        <BlackBears />
        <PandaBears />
        <PolarBears />

        <BearsDisplay />
      </div>
    </>
  );
};

export const BlackBears = () => {
  const blackBears = useBearsStore((state) => state.blackBears);
  const increaseBlackBears = useBearsStore((state) => state.increaseBlackBears);

  return (
    <WhiteCard centered>
      <h2>Osos Negros</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={() => increaseBlackBears(-1)}>-1</button>
        <span className="mx-2 text-3xl lg:mx-10"> {blackBears} </span>
        <button onClick={() => increaseBlackBears(+1)}> +1</button>
      </div>
    </WhiteCard>
  );
};

export const PandaBears = () => {
  const pandaBears = useBearsStore((state) => state.pandaBears);
  const increasePandaBears = useBearsStore((state) => state.increasePandaBears);

  return (
    <WhiteCard centered>
      <h2>Osos Pandas</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={() => increasePandaBears(-1)}>-1</button>
        <span className="mx-2 text-3xl lg:mx-10"> {pandaBears} </span>
        <button onClick={() => increasePandaBears(+1)}> +1</button>
      </div>
    </WhiteCard>
  );
};

export const PolarBears = () => {
  const polarBears = useBearsStore((state) => state.polarBears);
  const increasePolarBears = useBearsStore((state) => state.increasePolarBears);

  return (
    <WhiteCard centered>
      <h2>Osos Polares</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={() => increasePolarBears(-1)}>-1</button>
        <span className="mx-2 text-3xl lg:mx-10"> {polarBears} </span>
        <button onClick={() => increasePolarBears(+1)}> +1</button>
      </div>
    </WhiteCard>
  );
};

export const BearsDisplay = () => {
  const bears = useBearsStore(useShallow((state) => state.bears));
  const doNothing = useBearsStore((state) => state.doNothing);
  const addBear = useBearsStore((state) => state.addBear);
  const claerBears = useBearsStore((state) => state.claerBears);

  return (
    <WhiteCard>
      <h1>Osos</h1>
      <div className="flex flex-col gap-1 mt-2">
        <button onClick={() => doNothing()}>No hace nada</button>
        <button onClick={() => addBear()}>Agregar oso</button>
        <button onClick={() => claerBears()}>Borrar osos</button>
      </div>

      <pre className="mt-2">{JSON.stringify(bears, null, 2)}</pre>
    </WhiteCard>
  );
};
