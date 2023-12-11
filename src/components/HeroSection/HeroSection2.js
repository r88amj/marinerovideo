// SearchSection.js
import React from 'react';
import './HeroSection2.css';
import Form from 'react-bootstrap/Form';


const SearchSection = () => {
  return (
    <div className="search_section">
      <div className="row search-section">
        <div className="col-sm-12 col-md-6 column" id="column1">
          <img
            src="https://images.pexels.com/photos/296278/pexels-photo-296278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="boat_search"
          />
          <div className="overlay__title">
            <h1>Embarcaciones</h1>
          </div>
          <div className="overlay">
            <form className="search-form">
              <Form.Select className='btn--primary' aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <button className="btn--primary ml-2" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 column" id="column2">
          <img
            src="https://images.pexels.com/photos/3580532/pexels-photo-3580532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="tour_search"
          />
          <div className="overlay__title">
            <h1>Experiencias</h1>
          </div>
          <div className="overlay">
            {/* Contenido a mostrar al hacer hover */}
            <form className="search-form">
              <Form.Select className='btn--primary' aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <button className="btn--primary ml-2" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
