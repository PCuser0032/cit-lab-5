import React from "react";

const Preloader = (props) => {
  return (
    <div className="Preloader">
      <div>
        <p>Идёт загрузка...</p>
        <section className="one-fourth" id="html">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Preloader;
