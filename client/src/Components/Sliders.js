

import 'react-awesome-slider/dist/styles.css';

const Sliders = () => {
  return (
    <div>
      <section className="home-slider owl-carousel img" style={{backgroundImage: 'url(images/bg_1.jpg)'}}>
  <div className="slider-item">
  <div className="overlay" />
    <div className="container">
      <div className="row slider-text align-items-center" data-scrollax-parent="true">
        <div className="col-md-12 ftco-animate">
          <img src="https://picsum.photos/200/300" width="1200px" height="500px" alt />
        </div>
      </div>
    </div>
  </div>
  <div className="slider-item">
    <div className="overlay" />
    <div className="container">
      <div className="row slider-text align-items-center" data-scrollax-parent="true">
        <div className="col-md-12 ftco-animate">
          <img src="https://picsum.photos/200/300" height="600px" alt />
        </div>
      </div>
    </div>
  </div>
  <div className="slider-item">
    <div className="overlay" />
    <div className="container">
      <div className="row slider-text align-items-center" data-scrollax-parent="true">
        <div className="col-md-12 ftco-animate">
          <img src="https://picsum.photos/200/300" alt />
        </div>
      </div>
    </div>
  </div>
  <div className="slider-item">
    <div className="overlay" />
    <div className="container">
      <div className="row slider-text align-items-center" data-scrollax-parent="true">
        <div className="col-md-6 col-sm-12 ftco-animate">
          <span className="subheading">Delicieux</span>
          <h1 className="mb-4">Meilleur Pizza</h1>
          <p><a href="#" className="btn btn-primary p-3 px-xl-4 py-xl-3">Commander</a> <a href="#" className="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3">Voir Menu</a></p>
        </div>
        <div className="col-md-6 ftco-animate">
          <img src="https://picsum.photos/200/300" alt />
        </div>
      </div>
    </div>
  </div>
  <div className="slider-item">
    <div className="overlay" />
    <div className="slider-item" style={{backgroundImage: 'url(images/bg_3.jpg)'}}>
      <div className="overlay" />
      <div className="container">
        <div className="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">
          <div className="col-md-7 col-sm-12 text-center ftco-animate">
            <span className="subheading">Bienvenue</span>
            <h1 className="mb-4">Nous sommes tr??s heureux de vous accueillir dans notre
              Restaurant &amp; Caf?? lounge</h1>
            <p className="mb-4 mb-md-5">Venez nous rejoindre pour le petit-d??jeuner, le d??jeuner ou le d??ner et d??ner sur notre terrasse ext??rieure ou dans la salle ?? manger r??cemment r??nov??e.</p>
            <p><a href="#" className="btn btn-primary p-3 px-xl-4 py-xl-3">Commander</a> <a href="#" className="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3">Voir Menu</a></p>
          </div>
        </div>
      </div>
    </div>
  </div></section>

    </div>
  )
}

export default Sliders
