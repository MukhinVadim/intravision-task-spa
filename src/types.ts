export type State = {
	tasks: []
	users: []
	statuses: []
	priorities: []
	task: {}
	status: {}
	isAdd: boolean
	isEdit: boolean
}

export type Action = {
	type: string
	payload?: any
}

export type Tasks = {
	value: []
}


