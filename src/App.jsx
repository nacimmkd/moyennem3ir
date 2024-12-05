import React, { useState } from "react";
import "./App.css";

function App() {
  const [notes, setNotes] = useState({
    math_P1: "",
    math_P2: "",
    math_CC: "",
    tns_P1: "",
    tns_P2: "",
    tns_TP: "",
    java_P1: "",
    java_TP: "",
    reseaux_P1: "",
    unix_P1: "",
    unix_TP: "",
    ti_P1: "",
    anglais_P1: "",
    tec_P1: "",
  });

  const [averages, setAverages] = useState({});
  const [finalAverage, setFinalAverage] = useState(null);

  const coefficients = {
    math: 5,
    tns: 5,
    java: 4,
    reseaux: 4,
    unix: 3,
    ti: 3,
    anglais: 2,
    tec: 2,
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNotes({ ...notes, [name]: value });
  };

  const calculateAverages = () => {
    const values = Object.values(notes).map(Number);
    if (values.some(isNaN)) {
      alert("Veuillez entrer des valeurs valides pour tous les champs !");
      return;
    }

    const {
      math_P1,
      math_P2,
      math_CC,
      tns_P1,
      tns_P2,
      tns_TP,
      java_P1,
      java_TP,
      reseaux_P1,
      unix_P1,
      unix_TP,
      ti_P1,
      anglais_P1,
      tec_P1,
    } = notes;

    const mathAverage = (
      (2 * Number(math_P1) + 3 * Number(math_P2) + Number(math_CC)) /
      6
    ).toFixed(2);

    const tnsAverage = (
      (2 * Number(tns_P1) + 3 * Number(tns_P2) + Number(tns_TP)) /
      6
    ).toFixed(2);

    const javaAverage = (
      (2 * Number(java_P1) + Number(java_TP)) /
      3
    ).toFixed(2);

    const reseauxAverage = Number(reseaux_P1).toFixed(2);

    const unixAverage = (
      (2 * Number(unix_P1) + Number(unix_TP)) /
      3
    ).toFixed(2);

    const tiAverage = Number(ti_P1).toFixed(2);
    const anglaisAverage = Number(anglais_P1).toFixed(2);
    const tecAverage = Number(tec_P1).toFixed(2);

    const totalWeightedScore =
      mathAverage * coefficients.math +
      tnsAverage * coefficients.tns +
      javaAverage * coefficients.java +
      reseauxAverage * coefficients.reseaux +
      unixAverage * coefficients.unix +
      tiAverage * coefficients.ti +
      anglaisAverage * coefficients.anglais +
      tecAverage * coefficients.tec;

    const generalAverage = (totalWeightedScore / 28).toFixed(2);

    setAverages({
      math: mathAverage,
      tns: tnsAverage,
      java: javaAverage,
      reseaux: reseauxAverage,
      unix: unixAverage,
      ti: tiAverage,
      anglais: anglaisAverage,
      tec: tecAverage,
    });

    setFinalAverage(generalAverage);
  };

  return (
    <div className="app-container">
      <h1>Calcul des Moyennes et Note Finale</h1>
      <div className="modules-container">
        {/* Mathématiques */}
        <div className="module">
          <h2 className="module-title">Mathématiques</h2>
          <div className="input-group">
            <label>P1</label>
            <input
              type="number"
              name="math_P1"
              value={notes.math_P1}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>P2</label>
            <input
              type="number"
              name="math_P2"
              value={notes.math_P2}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>Contrôle Continu (CC)</label>
            <input
              type="number"
              name="math_CC"
              value={notes.math_CC}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* TNS */}
        <div className="module">
          <h2 className="module-title">TNS</h2>
          <div className="input-group">
            <label>P1</label>
            <input
              type="number"
              name="tns_P1"
              value={notes.tns_P1}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>P2</label>
            <input
              type="number"
              name="tns_P2"
              value={notes.tns_P2}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>TP</label>
            <input
              type="number"
              name="tns_TP"
              value={notes.tns_TP}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Java */}
        <div className="module">
          <h2 className="module-title">Java</h2>
          <div className="input-group">
            <label>P1</label>
            <input
              type="number"
              name="java_P1"
              value={notes.java_P1}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>TP</label>
            <input
              type="number"
              name="java_TP"
              value={notes.java_TP}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Réseaux */}
        <div className="module">
          <h2 className="module-title">Réseaux</h2>
          <div className="input-group">
            <label>P1</label>
            <input
              type="number"
              name="reseaux_P1"
              value={notes.reseaux_P1}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Unix */}
        <div className="module">
          <h2 className="module-title">Unix</h2>
          <div className="input-group">
            <label>P1</label>
            <input
              type="number"
              name="unix_P1"
              value={notes.unix_P1}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>TP</label>
            <input
              type="number"
              name="unix_TP"
              value={notes.unix_TP}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Théorie d'information */}
        <div className="module">
          <h2 className="module-title">Théorie d'Information</h2>
          <div className="input-group">
            <label>P1</label>
            <input
              type="number"
              name="ti_P1"
              value={notes.ti_P1}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Anglais */}
        <div className="module">
          <h2 className="module-title">Anglais</h2>
          <div className="input-group">
            <label>P1</label>
            <input
              type="number"
              name="anglais_P1"
              value={notes.anglais_P1}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* TEC */}
        <div className="module">
          <h2 className="module-title">TEC</h2>
          <div className="input-group">
            <label>P1</label>
            <input
              type="number"
              name="tec_P1"
              value={notes.tec_P1}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      <button className="calculate-button" onClick={calculateAverages}>
        Calculer les Moyennes
      </button>

      {finalAverage && (
        <div className="results-container">
          <h2>Résultats</h2>
          {Object.entries(averages).map(([module, avg]) => (
            <p key={module}>
              Moyenne {module.charAt(0).toUpperCase() + module.slice(1)} : {avg} / 20
            </p>
          ))}
          <h3>Note Finale : {finalAverage} / 20</h3>
        </div>
      )}
    </div>
  );
}

export default App;
