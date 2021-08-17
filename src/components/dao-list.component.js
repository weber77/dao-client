import React, { Component } from "react";
import daoDataService from "../services/dao.service";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faSearch } from '@fortawesome/free-solid-svg-icons';




export default class DaosList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveDaos = this.retrieveDaos.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.categoryFilter = this.categoryFilter.bind(this);
    this.searchFilter = this.searchFilter.bind(this);

    this.state = {
      daos: [],
      daoProtocols: [],
      currentDao: null,
      currentIndex: -1,
      searchFilter: ""
    };
  }



  componentDidMount() {
    this.retrieveDaos();
  }

  onChangeSearchTitle(e) {
    const searchFilter = e.target.value;

    this.setState({
      searchFilter: searchFilter
    });
  }

  retrieveDaos() {
    daoDataService.getAll()
      .then(response => {
        this.setState({
          daos: response.data,
          daoProtocols: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveDaos();
    this.setState({
      currentDao: null,
      currentIndex: -1
    });
  }

  categoryFilter(cat) {


    this.setState({
      daos: this.state.daoProtocols.filter(
        ({ category }) =>
          cat === category || cat === "All"
      )
    })
  }



  searchFilter() {
    // this.setState({
    //   currentDao: null,
    //   currentIndex: -1
    // });

    // daoDataService.findByTitle(this.state.searchFilter)
    //   .then(response => {
    //     this.setState({
    //       daos: response.data
    //     });
    //     console.log(response.data);
    //   })
    //   .catch(e => {
    //     console.log(e);
    //   });


  }



  render() {
    const { searchFilter, daos, daoProtocols, currentIndex } = this.state;

    // get unique category protocol
    const uniqueProtocols = (x, i, array) => array.indexOf(x) === i;

    const DAO_Protocols = daoProtocols.map(dao => dao.category).filter(
      uniqueProtocols
    );

    DAO_Protocols.push("All");
    DAO_Protocols.sort();

    let totalAUM = 0;
    for (let index = 0; index < daos.length; index++) {

      if (Number.isNaN(daos[index].AUM))
        continue;
      totalAUM += daos[index].AUM;

    }

    const renderCategory = () => {

      return DAO_Protocols.map((key, index) => {

        return <li>
          <span
            // type="submit"
            className=""

            key={index}
            onClick={() => this.categoryFilter(key)}
          >
            {key}
          </span>
        </li>
      })
    }

    const renderHeader = () => {
      let headerElement = ['name', 'category', 'AUM (USD)', 'twitter followers', 'founded date']

      return headerElement.map((key, index) => {
        return <th key={index} >{key.toUpperCase()}</th>
      })
    }

    const renderBody = () => {
      return daos && daos.map((dao, index) => {

        return (

          <tr className={
            (index === currentIndex ? "active my-3" : "my-3")
          }
            key={index}
          >
            <Link
              to={"/daos_display/" + dao._id}

            ><td><img className="img mr-2 img-thumbnail d-inline-block" style={{ height: "32px", width: "32px" }} src={dao.logo_link} alt="dao logo" />{dao.full_name}</td>

            </Link>
            <td>{dao.category}</td>
            <td>${dao.AUM}</td>
            <td>{dao.numTwitterFollowers}</td>
            <td>{dao.date_founded}</td>
            <td><a href={dao.website_link}><FontAwesomeIcon icon={faGlobe} /></a></td>
            <td><a href={dao.social_media}><FontAwesomeIcon icon={faTwitter} /></a></td>
          </tr>
        )
      })
    }

    return (
      <div className="list row">
        <div className="col-md-12">
          <div className="container-fluid my-4">
            <div className="row shadow border">
              <div className="col-md-6 p-3" >
                Number of DAOs <br />
                {daos.length} <br />
                from 84
              </div>
              <div className="col-md-6 p-3 border-left">
                Total AUM (USD) <br />
                {totalAUM} <br />
                from $3,152M
              </div>
            </div>
          </div>

          <div>
            <ul class="category-link">
              {renderCategory()}
            </ul>
          </div>

          <div className="search input-group my-4">


            <div className="search-icon"  >
              <FontAwesomeIcon icon={faSearch} />
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              value={searchFilter}
              onChange={this.onChangeSearchTitle}
            />


          </div>

        </div>
        <div className="col-md-12">

          <h4>Daos List</h4>


          <table className="table table-hover">
            <thead>
              <tr>{renderHeader()}</tr>
            </thead>

            <tbody>
              {renderBody()}
            </tbody>

          </table>


        </div>

      </div>
    );
  }
}
