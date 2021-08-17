import React, { Component } from "react";
import DaoDataService from "../services/dao.service";
import { Link } from "react-router-dom";


export default class DaoDisplay extends Component {
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
      this.state.currentDao.id,
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
    DaoDataService.delete(this.state.currentDao.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/daos')
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentDao } = this.state;

    return (
      <div>
        {
          <div className="edit-form">
            <h4>Dao</h4>
            <form>
              <div className="form-group">

                <p> <strong>Full Name:</strong> {currentDao.full_name}</p>
                <p> <strong>Description:</strong> {currentDao.description}</p>
                <p> <strong>Date Founded:</strong> {currentDao.date_founded}</p>
                <p> <strong>Date Created:</strong> {currentDao.date_created}</p>
                <p> <strong>Category:</strong> {currentDao.category}</p>
                <p> <strong>Governance Token Name:</strong> {currentDao.governance_token_name}</p>
                <p> <strong>Governance Token Symbol:</strong> {currentDao.governance_token_symbol}</p>
                <p> <strong>DAO Structure:</strong> {currentDao.dao_structure}</p>
                <p> <strong>Voting Process:</strong> {currentDao.voting_process}</p>
                <p> <strong>AUM:</strong> ${currentDao.AUM}</p>
                <p> <strong>TVL:</strong> {currentDao.TVL}</p>
                <p> <strong>Tech Stack:</strong> {currentDao.tech_stack}</p>
                <p> <strong>Notes:</strong> {currentDao.notes}</p>
                <p> <strong>Blockchain:</strong> {currentDao.blockchain}</p>
                <p> <strong>Head Quarters:</strong> {currentDao.headquarters}</p>
              </div>

              <Link
                to={"/daos_edit/" + currentDao._id}
                className="badge badge-warning"
              >
                Edit
              </Link>
              
            </form>

            

            
          </div>
        
    }
      </div>
    );
  }
}
