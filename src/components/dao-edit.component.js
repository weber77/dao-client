import React, { Component } from "react";
import DaoDataService from "../services/dao.service";
import { Link } from "react-router-dom";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";


export default class Dao extends Component {
  constructor(props) {
    super(props);
    this.onChangeFullName = this.onChangeFullName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDateFounded = this.onChangeDateFounded.bind(this);
    this.onChangeDateCreated = this.onChangeDateCreated.bind(this);
    this.onChangeLogoLink = this.onChangeLogoLink.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeGovTokenName = this.onChangeGovTokenName.bind(this);
    this.onChangeGovTokenSymbol = this.onChangeGovTokenSymbol.bind(this);
    this.onChangeDaoStructure = this.onChangeDaoStructure.bind(this);
    this.onChangeVotingProcess = this.onChangeVotingProcess.bind(this);
    this.onChangeTVL = this.onChangeTVL.bind(this);
    this.onChangeAUM = this.onChangeAUM.bind(this);
    this.onChangeTechStack = this.onChangeTechStack.bind(this);
    this.onChangeNotes = this.onChangeNotes.bind(this);
    this.onChangeBlockchain = this.onChangeBlockchain.bind(this);
    this.onChangeHQ = this.onChangeHQ.bind(this);

    this.getDao = this.getDao.bind(this);
    this.updateDao = this.updateDao.bind(this);
    this.deleteDao = this.deleteDao.bind(this);

    this.state = {
      currentDao: {
        id: null,
        full_name: "",
        description: "",
        date_founded: "2012-12-19",
        date_created: "2012-12-19",
        logo_link: "",
        category: "", // drop down
        governance_token_name: "",
        governance_token_symbol: "",
        dao_structure: "",  // drop down
        voting_process: "",
        AUM:0,
        TVL: 0,
        tech_stack: "",
        notes: "",
        blockchain: "", // drop down
        headquarters: "",
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getDao(this.props.match.params.id);
    console.log(this.props.match.params.id);
    
  }

  onChangeFullName(e) {
    const full_name = e.target.value;

    this.setState(function (prevState) {
      return {
        currentDao: {
          ...prevState.currentDao,
          full_name: full_name
        }
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;

    this.setState(prevState => ({
      currentDao: {
        ...prevState.currentDao,
        description: description
      }
    }));
  }

  onChangeDateFounded(e) {
    const date_founded = e.target.value;

    this.setState(prevState => ({
      currentDao: {
        ...prevState.currentDao,
        date_founded: date_founded
      }
    }));
  }
  onChangeDateCreated(e) {
    const date_created = e.target.value;

    this.setState(prevState => ({
      currentDao: {
        ...prevState.currentDao,
        date_created: date_created
      }
    }));
  }
  onChangeLogoLink(e) {
    const logo_link = e.target.value;

    this.setState(prevState => ({
      currentDao: {
        ...prevState.currentDao,
        logo_link: logo_link
      }
    }));
  }
  onChangeCategory(e) {
    const category = e.target.value;

    this.setState(prevState => ({
      currentDao: {
        ...prevState.currentDao,
        category: category
      }
    }));
  }
  onChangeGovTokenName(e) {
    const governance_token_name = e.target.value;

    this.setState(prevState => ({
      currentDao: {
        ...prevState.currentDao,
        governance_token_name: governance_token_name
      }
    }));
  }
  onChangeGovTokenSymbol(e) {
    const governance_token_symbol = e.target.value;

    this.setState(prevState => ({
      currentDao: {
        ...prevState.currentDao,
        governance_token_symbol: governance_token_symbol
      }
    }));
  }
  onChangeDaoStructure(e) {
    const dao_structure = e.target.value;

    this.setState(prevState => ({
      currentDao: {
        ...prevState.currentDao,
        dao_structure: dao_structure
      }
    }));
  }
  onChangeVotingProcess(e) {
    const voting_process = e.target.value;

    this.setState(prevState => ({
      currentDao: {
        ...prevState.currentDao,
        voting_process: voting_process
      }
    }));
  }
  onChangeAUM(e) {
    const AUM = e.target.value;

    this.setState(prevState => ({
      currentDao: {
        ...prevState.currentDao,
        AUM: AUM
      }
    }));
  }
  onChangeTVL(e) {
    const TVL = e.target.value;

    this.setState(prevState => ({
      currentDao: {
        ...prevState.currentDao,
        TVL: TVL
      }
    }));
  }
  onChangeTechStack(e) {
    const tech_stack = e.target.value;

    this.setState(prevState => ({
      currentDao: {
        ...prevState.currentDao,
        tech_stack: tech_stack
      }
    }));
  }
  onChangeNotes(e) {
    const notes = e.target.value;

    this.setState(prevState => ({
      currentDao: {
        ...prevState.currentDao,
        notes: notes
      }
    }));
  }
  onChangeBlockchain(e) {
    const blockchain = e.target.value;

    this.setState(prevState => ({
      currentDao: {
        ...prevState.currentDao,
        blockchain: blockchain
      }
    }));
  }
  onChangeHQ(e) {
    const headquarters = e.target.value;

    this.setState(prevState => ({
      currentDao: {
        ...prevState.currentDao,
        headquarters: headquarters
      }
    }));
  }

  getDao(id) {
    DaoDataService.get(id)
      .then(response => {
        this.setState({
          currentDao: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }


  updateDao() {
    DaoDataService.update(
      this.state.currentDao._id,
      this.state.currentDao
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The dao was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteDao() {
    DaoDataService.delete(this.state.currentDao._id)
      .then(response => {
        console.log(response.data);
        
        // this.props.history.push('/daos');
        this.setState({
          message: "The dao was deleted successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentDao } = this.state;
    const minDate = new Date(1970, 1, 1)

    return (
      <div>
        {
          <div className="edit-form">
            <h4>Dao</h4>
            <form>
              <div className="form-group">
                <label htmlFor="full_name">FullName</label>
                <input
                  type="text"
                  className="form-control"
                  id="full_name"
                  value={currentDao.full_name}
                  onChange={this.onChangeFullName}
                />
              </div>
              
              <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                type="text"
                className="form-control"
                id="description"
                value={currentDao.description}
                onChange={this.onChangeDescription}
                name="description"
                rows="5"
              />
            </div>
            <div className="form-group">
              <label htmlFor="date_founded">Date Founded</label>

              <DatePickerComponent
                placeholder="Enter Date"
                className="form-control"
                id="date_founded"
                required="true"
                value={currentDao.date_founded}
                onChange={this.onChangeDateFounded}
                name="date_founded"
                min={minDate}
                // max={dateValue}

                format="yyyy-MM-dd">

              </DatePickerComponent>
            </div>


            <div className="form-group">
              <label htmlFor="date_created">Date Created</label>

              <DatePickerComponent
                placeholder="Enter Date"
                className="form-control"
                id="date_created"
                required
                value={currentDao.date_created}
                onChange={this.onChangeDateCreated}
                name="date_founded"
                min={minDate}
                // max={dateValue}

                format="yyyy-MM-dd">

              </DatePickerComponent>
            </div>
              

              <div className="form-group">
                <label htmlFor="logo_link">Logo Link</label>
                <input
                  type="text"
                  className="form-control"
                  id="logo_link"
                  required
                  value={currentDao.logo_link}
                  onChange={this.onChangeLogoLink}

                />
              </div>

              
              <div className="form-group">
              <label htmlFor="category">Category</label>


              <select
                type="text"
                className="form-control"
                id="category"
                required
                value={currentDao.category}
                onChange={this.onChangeCategory}
                name="category"
              >
                <option value="Protocol">Protocol</option>
                <option value="Service">Service</option>
                <option value="Grant">Grant</option>
                <option value="Media">Media</option>
                <option value="Social">Social</option>
                <option value="Investment">Investment</option>
                <option value="Platform">Platform</option>
                <option value="Collector">Collector</option>

              </select>
            </div>

              <div className="form-group">
                <label htmlFor="governance_token_name">Governance Token Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="governance_token_name"
                  required
                  value={currentDao.governance_token_name}
                  onChange={this.onChangeGovTokenName}

                />
              </div>

              <div className="form-group">
                <label htmlFor="governance_token_symbol">Governance Token Symbol</label>
                <input
                  type="text"
                  className="form-control"
                  id="governance_token_symbol"
                  required
                  value={currentDao.governance_token_symbol}
                  onChange={this.onChangeGovTokenSymbol}

                />
              </div>

              <div className="form-group">
              <label htmlFor="dao_structure">DAO Structure</label>

              <select
                type="text"
                className="form-control"
                id="dao_structure"
                required
                value={currentDao.dao_structure}
                onChange={this.onChangeDaoStructure}
                name="dao_structure">
                <option value="shares">Shares</option>
                <option value="gov_token">Gov token</option>
                <option value="tbd">Tbd</option>
              </select>
            </div>

              <div className="form-group">
                <label htmlFor="voting_process">Voting Process</label>
                <input
                  type="text"
                  className="form-control"
                  id="voting_process"
                  required
                  value={currentDao.voting_process}
                  onChange={this.onChangeVotingProcess}

                />
              </div>
              <div className="form-group">
              <label htmlFor="AUM">AUM</label>
              <input
                type="text"
                className="form-control"
                id="AUM"
                required
                value={currentDao.AUM}
                onChange={this.onChangeAUM}
                name="AUM"
              />
            </div>

              <div className="form-group">
                <label htmlFor="TVL">TVL</label>
                <input
                  type="text"
                  className="form-control"
                  id="TVL"
                  required
                  value={currentDao.TVL}
                  onChange={this.onChangeTVL}

                />
              </div>

              <div className="form-group">
                <label htmlFor="tech_stack">Tech Stack</label>
                <input
                  type="text"
                  className="form-control"
                  id="tech_stack"
                  required
                  value={currentDao.tech_stack}
                  onChange={this.onChangeTechStack}

                />
              </div>

              <div className="form-group">
                <label htmlFor="notes">Notes</label>
                <input
                  type="text"
                  className="form-control"
                  id="notes"
                  required
                  value={currentDao.notes}
                  onChange={this.onChangeNotes}

                />
              </div>

              <div className="form-group">
              <label htmlFor="blockchain">Blockchain</label>

              <select
                type="text"
                className="form-control"
                id="blockchain"
                required
                value={currentDao.blockchain}
                onChange={this.onChangeBlockchain}
                name="blockchain">
                <option value="Ethereum">Ethereum</option>
                <option value="Polygon">Polygon</option>
                <option value="Binance_Smart_Chain">Binance Smart Chain</option>
                <option value="Harmony">Harmony</option>
                <option value="Solana">Solana</option>
                <option value="Algorand">Algorand</option>
                <option value="NEAR">NEAR</option>
                <option value="IBM_Blockchain">IBM Blockchain</option>
                <option value="Hyperledger_Fabric">Hyperledger Fabric</option>
                <option value="Tezos">Tezos</option>
                <option value="EOSIO">EOSIO</option>
                <option value="Waves">Waves</option>
                <option value="Ripple">Ripple</option>
              </select>

            </div>

              <div className="form-group">
                <label htmlFor="headquarters">Head Quarters</label>
                <input
                  type="text"
                  className="form-control"
                  id="headquarters"
                  required
                  value={currentDao.headquarters}
                  onChange={this.onChangeHQ}

                />
              </div>

            </form>

            
            <Link
            to={"/allDao/"}
            className=" ">
            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteDao}
            >
              Delete
            </button>
            </Link>

            
            <Link
                to={"/daos_display/" + currentDao._id}
                className=" badge-warning"
              >
                <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateDao}
            >
              Update
            </button>
              </Link>
          </div>
          
        
      }
      </div>
    );
  }
}
