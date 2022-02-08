import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index'
import StudentComponent from '../components/studentComponent'

function mapStateToProps(state) {
	return {
		student: state.studentReducer.listStudent,
		totalRecords: state.studentReducer.totalRecords,
		totalPage: state.studentReducer.totalPage,
		activePage: state.studentReducer.activePage,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		getStudent : (payload) =>{
			dispatch(actions.getStudentRequest(payload));
		},
		addStudent : (payload) =>{
			dispatch(actions.addStudentRequest(payload));
		},
		updateStudent : (payload) =>{
			dispatch(actions.updateStudentRequest(payload));
		},
		deleteStudent : (payload) =>{
			dispatch(actions.deleteStudentRequest(payload));
		},
		importStudent : (payload) =>{
			dispatch(actions.importStudentRequest(payload));
		}
	};
}

class container extends Component {
	componentDidMount() {
		this.props.getStudent({activePage: 1})
	}
	render() {
		return (
			<div>
				<StudentComponent {...this.props}/>
			</div>
		);
	}
}

export default connect(
	mapStateToProps,mapDispatchToProps
)(container);