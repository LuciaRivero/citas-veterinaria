import React, {Component} from 'react';
import uuid from 'uuid';

class NuevaCita extends Component {
  state = {
    cita: {
      mascota: '',
      propietario: '',
      fecha:'',
      hora:'',
      sintomas:'',
    },
    error: false
  }

  hanleChange = e => {
    this.setState({
      cita: {
        ...this.state.cita, //copio el state y reescribo la parte del taget.name
        [e.target.name] : e.target.value
      }
    })
  }

  handleSubmit = e => {
    e.preventDefault();

    //extraigo valores del state
    const {mascota, propietario, fecha, hora, sintomas} = this.state.cita;

    //valido los campos
    if(mascota === "" || propietario === "" || fecha === "" || hora === "" || sintomas === ""){
      this.setState({
        error:true
      });
      return
    }

    //generar objeto

    const nuevaCita = {...this.state.cita};
    nuevaCita.id = uuid();

    //agregar la nueva cita al state

    this.props.crearNuevaCita(this.state.cita);
  }

  render() {
    return(
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2 className="card-title"> Llena el formulario para crear una nueva cita</h2>
          <form>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Nombre mascota</label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre mascota"
                  name="mascota"
                  onChange={this.hanleChange}
                  value={this.state.cita.mascota}/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Nombre dueño</label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre dueño"
                  name="propietario"
                  onChange={this.hanleChange}
                  value={this.state.cita.propietario}/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="date"
                  className="form-control"
                  name="fecha"
                  onChange={this.hanleChange}
                  value={this.state.cita.fecha}/>
              </div>

              <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="time"
                  className="form-control"
                  name="hora"
                  onChange={this.hanleChange}
                  value={this.state.cita.hora}/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
              <div className="col-sm-8 col-lg-10">
                <textarea
                  className="form-control"
                  placeholder="Describe los sintomas"
                  name="sintomas"
                  onChange={this.hanleChange}
                  value={this.state.cita.sintomas}
                  ></textarea>
              </div>

              <input type="submit" className="py-3 mt-2 btn btn-success btn-block" value="Agregar nueva cita"/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NuevaCita;