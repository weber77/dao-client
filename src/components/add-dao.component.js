
import React, { Component } from "react";
import DaoDataService from "../services/dao.service";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";


export default class AddTutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);

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

    this.saveDao = this.saveDao.bind(this);
    this.newDao = this.newDao.bind(this);

    this.state = {
      id: null,
      full_name: "",
      description: "",
      date_founded: "",
      date_created: "",
      logo_link: "",
      category: "Protocol", // drop down
      governance_token_name: "",
      governance_token_symbol: "",
      dao_structure: "shares",  // drop down
      voting_process: "",
      AUM: 0,
      TVL: 0,
      tech_stack: "",
      notes: "",
      blockchain: "Ethereum", // drop down
      headquarters: "",

      submitted: false

    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeFullName(e) {
    this.setState({
      full_name: e.target.value
    });
  }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }
  onChangeDateFounded(e) {
    this.setState({
      date_founded: e.target.value
    });
  }
  onChangeDateCreated(e) {
    this.setState({
      date_created: e.target.value
    });
  }
  onChangeLogoLink(e) {
    this.setState({
      logo_link: e.target.value
    });
  }
  onChangeCategory(e) {
    this.setState({
      category: e.target.value
    });
  }
  onChangeGovTokenName(e) {
    this.setState({
      governance_token_name: e.target.value
    });
  }
  onChangeGovTokenSymbol(e) {
    this.setState({
      governance_token_symbol: e.target.value
    });
  }
  onChangeDaoStructure(e) {
    this.setState({
      dao_structure: e.target.value
    });
  }
  onChangeVotingProcess(e) {
    this.setState({
      voting_process: e.target.value
    });
  }
  onChangeTVL(e) {
    this.setState({
      TVL: e.target.value
    });
  }
  onChangeAUM(e) {
    this.setState({
      TVL: e.target.value
    });
  }
  onChangeTechStack(e) {
    this.setState({
      tech_stack: e.target.value
    });
  }
  onChangeNotes(e) {
    this.setState({
      notes: e.target.value
    });
  }
  onChangeBlockchain(e) {
    this.setState({
      blockchain: e.target.value
    });
  }
  onChangeHQ(e) {
    this.setState({
      headquarters: e.target.value
    });
  }
  saveDao() {
    var data = {
      full_name: this.state.full_name,
      description: this.state.description,
      date_founded: this.state.date_founded,
      date_created: this.state.date_created,
      logo_link: this.state.logo_link,
      category: this.state.category, // drop down
      governance_token_name: this.state.governance_token_name,
      governance_token_symbol: this.state.governance_token_symbol,
      dao_structure: this.state.dao_structure,  // drop down
      voting_process: this.state.voting_process,
      AUM: this.state.AUM, 
      TVL: this.state.TVL,
      tech_stack: this.state.tech_stack,
      notes: this.state.notes,
      blockchain: this.state.blockchain, // drop down
      headquarters: this.state.headquarters,
    };

    console.log(data);

    DaoDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          full_name: response.data.full_name,
          description: response.data.description,
          date_founded: response.data.date_founded,
          date_created: response.data.date_created,
          logo_link: response.data.logo_link,
          category: response.data.category, // drop down
          governance_token_name: response.data.governance_token_name,
          governance_token_symbol: response.data.governance_token_symbol,
          dao_structure: response.data.dao_structure,  // drop down
          voting_process: response.data.voting_process,
          AUM: response.data.AUM, 
          TVL: response.data.TVL,
          tech_stack: response.data.tech_stack,
          notes: response.data.notes,
          blockchain: response.data.blockchain, // drop down
          headquarters: response.data.headquarters,
          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newDao() {
    this.setState({
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

      submitted: false
    });
  }

  render() {
    // const dateValue = new Date(new Date().getFullYear(), new Date().getMonth()+1)
    const minDate = new Date(1970, 1, 1)
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newDao}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="full_name">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="full_name"
                required
                value={this.state.full_name}
                onChange={this.onChangeFullName}
                name="full_name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
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
                value={this.state.date_founded}
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
                value={this.state.date_created}
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
                value={this.state.logo_link}
                onChange={this.onChangeLogoLink}
                name="logo_link"
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">Category</label>


              <select
                type="text"
                className="form-control"
                id="category"
                required
                value={this.state.category}
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
                value={this.state.governance_token_name}
                onChange={this.onChangeGovTokenName}
                name="governance_token_name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="governance_token_symbol">Governance Token Symbol</label>
              <input
                type="text"
                className="form-control"
                id="governance_token_symbol"
                required
                value={this.state.governance_token_symbol}
                onChange={this.onChangeGovTokenSymbol}
                name="governance_token_symbol"
              />
            </div>

            <div className="form-group">
              <label htmlFor="dao_structure">DAO Structure</label>

              <select
                type="text"
                className="form-control"
                id="dao_structure"
                required
                value={this.state.dao_structure}
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
                value={this.state.voting_process}
                onChange={this.onChangeVotingProcess}
                name="voting_process"
              />
            </div>

            <div className="form-group">
              <label htmlFor="AUM">AUM</label>
              <input
                type="text"
                className="form-control"
                id="AUM"
                required
                value={this.state.AUM}
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
                value={this.state.TVL}
                onChange={this.onChangeTVL}
                name="TVL"
              />
            </div>

            <div className="form-group">
              <label htmlFor="tech_stack">Tech Stack</label>
              <input
                type="text"
                className="form-control"
                id="tech_stack"
                required
                value={this.state.tech_stack}
                onChange={this.onChangeTechStack}
                name="tech_stack"
              />
            </div>

            <div className="form-group">
              <label htmlFor="notes">Notes</label>
              <input
                type="text"
                className="form-control"
                id="notes"
                required
                value={this.state.notes}
                onChange={this.onChangeNotes}
                name="notes"
              />
            </div>

            <div className="form-group">
              <label htmlFor="blockchain">Blockchain</label>

              <select
                type="text"
                className="form-control"
                id="blockchain"
                required
                value={this.state.blockchain}
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
                value={this.state.headquarters}
                onChange={this.onChangeHQ}
                name="headquarters"
              />
            </div>

            <button onClick={this.saveDao} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}