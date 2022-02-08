import React, { Component } from 'react';
import XLSX from 'xlsx';
import FileSaver from 'file-saver';
class studentComponent extends Component {
	state = {
		activePage: 1,
		studentId: '',
		updateCountry: '',
		updateGender: '',
		addCountry: '',
		addGender: '',
		file: []
	}
	render() {
		let listData = []
		let listNum = []
		let listBtnData = []
		for (let i = 1; i <= this.props.totalPage; i++) {
			listNum.push(i)
		}
		listBtnData = listNum.map((value, index) => {
			return (
				<button
					onClick={() => {
						this.setState({ activePage: value })
						this.props.getStudent({ activePage: value })
					}}
					style={this.props.activePage === value ? { backgroundColor: "lightgreen" } : { backgroundColor: null }}
					key={index}
				>{value}</button>
			)
		})
		if (this.props.student) {
			listData = this.props.student.map((value, index) => {
				return (
					<tr key={index}>
						<th>{index + 1}</th>
						<th>{value.Country}</th>
						<th>{value.Gender}</th>
						<th>
							<button
								onClick={() => this.props.deleteStudent({ id: value._id })}
							>DELETE</button>
						</th>
						<th>
							<button
								onClick={() => {
									this.setState({ updateCountry: value.Country, updateGender: value.Gender, studentId: value._id })
								}}
							>CHOOSE</button>
						</th>
					</tr>
				)
			})
		}
		return (
			<div>
				<div>
					<input
						onChange={(e) => {
							this.setState({ addCountry: e.target.value })
						}}
						value={this.state.addCountry}
					></input>
					<input
						onChange={(e) => {
							this.setState({ addGender: e.target.value })
						}}
						value={this.state.addGender}

					></input>
					<button
						onClick={() => this.props.addStudent({
							addCountry: this.state.addCountry,
							addGender: this.state.addGender,
						})}
					>ADD</button>
				</div>
				<div>
					<input
						onChange={(e) => {
							this.setState({ updateCountry: e.target.value })
						}}
						value={this.state.updateCountry}
					></input>
					<input
						onChange={(e) => {
							this.setState({ updateGender: e.target.value })
						}}
						value={this.state.updateGender}

					></input>
					<button
						onClick={() => this.props.updateStudent({
							updateCountry: this.state.updateCountry,
							updateGender: this.state.updateGender,
							id: this.state.studentId
						})}
					>UPDATE</button>
				</div>
				<table>
					<tbody>
						<tr>
							<th>Number</th>
							<th>Country</th>
							<th>Gender</th>
						</tr>
						{listData}
					</tbody>
				</table>
				{listBtnData}
				<div>
					<input type="file" onChange={(e) => {
						this.setState({ file: e.target.files[0] })
					}}></input>
					<button
						onClick={() => {
							this.props.importStudent({ file: this.state.file })
						}}
					>Import</button>
				</div>
				<div>
					<button
						onClick={() => {
							const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
							const fileExtension = '.xlsx';
							const fileName = 'doge'
							const ws = XLSX.utils.json_to_sheet(this.props.totalRecords);
							const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
							const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
							const data = new Blob([excelBuffer], { type: fileType });
							FileSaver.saveAs(data, fileName + fileExtension);


						}}
					>Export</button>
				</div>
			</div>
		);
	}
}

export default studentComponent;