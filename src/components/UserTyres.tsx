'use client'
import React, { useState } from 'react';
import TireTracker from './TyreUsedBar';

type Tyre = "soft" | "medium" | "hard" | "wet";
const TYRE_OPTIONS: Tyre[] = ["soft", "medium", "hard", "wet"];


interface Stint {
  tyreTipe: Tyre;
  laps: number;
}

interface State {
  objects: Stint[];
  currentTyre: Tyre;
  currentLaps: string;
}

const UserTyreForm: React.FC = () => {
  const [state, setState] = useState<State>({
    objects: [],
    currentTyre: "soft",
    currentLaps: "",
  });

  const handleAddStint = () => {
    if (state.currentLaps) {
      setState((prev) => ({
        ...prev,
        objects: [
          ...prev.objects,
          { tyreTipe: state.currentTyre, laps: parseInt(state.currentLaps) },
        ],
        currentLaps: "",
      }));
    }
  };

  const handleSave = () => {
    const tireDataToSend = state.objects.map(obj => ({ [obj.tyreTipe]: obj.laps }));
    console.log(tireDataToSend)
    // postUserTyres(tireDataToSend);
  };

  const handleDeleteStint = () => {
    setState(prev => ({
        ...prev,
        objects: prev.objects.slice(0, -1)
    }));
  };

  return (
    <form className="space-y-4 w-80 mx-auto mt-10">
      <div className="flex space-x-4 items-center">
        <label className="block text-gray-700">Select Tyre:</label>
        <select
          className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          value={state.currentTyre}
          onChange={(e) => setState({ ...state, currentTyre: e.target.value as Tyre })}
        >
        {TYRE_OPTIONS.map(tyre => (
          <option key={tyre} value={tyre}>
            {tyre.charAt(0).toUpperCase() + tyre.slice(1)} {/* Convierte "soft" en "Soft", etc. */}
          </option>
        ))}
        </select>
      </div>

      <div className="flex space-x-4 items-center">
        <label className="block text-gray-700">Enter Laps:</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          value={state.currentLaps}
          onChange={(e) => setState({ ...state, currentLaps: e.target.value })}
        />
      </div>

      <div className='flex space-x-4 items-center justify-center'>
        <button
          type="button" // Importante para que no recargue la página
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleAddStint}
        >
          Add Stint
        </button>
        <button
          type="button"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleDeleteStint}
        >
          Delete Stint
        </button>
        <button
          type="button"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleSave}
        >
          Save
        </button>
      </div>

      <div className='pt-4 flex justify-center'>
        <TireTracker
          tireData={state.objects.map(obj => ({ [obj.tyreTipe]: obj.laps }))}
          totalWidth={300} // Puedes ajustar el ancho total como lo necesites
        />
      </div>
    </form>
  );
};

export default UserTyreForm;
