import style from "./App.module.scss";

function App() {
  return (
    <>
      <main>
        <div className={`container-fluid ${style.contentDiv}`}>
          <div className="row">
            <div className={`col-6 ${style.leftDiv}`}></div>
            <div className={`col-6 ${style.rightDiv}`}>
              <p>PERFUME</p>
              <p>Gabriele Esse Eau Da Parfeum</p>
              <p>
                A floral, solar and voluptous interpretation composed by Olivier
                Polge, Perfumer-Creator for the House of CHANEL
              </p>
              <p>$144.99 <span> $169.99</span></p>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
