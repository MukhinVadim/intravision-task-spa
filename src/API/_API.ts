import axios from "axios"
// import { Tasks } from "../types";

const tenantguid = 'ce21af0a-82f2-4b2f-8fa5-0f64ab516eea'

const instance = axios.create({
	baseURL: `http://intravision-task.test01.intravision.ru/api/${ tenantguid }/`
})


export const tasksAPI = {
	getTasks() {
		return axios.get(`http://intravision-task.test01.intravision.ru/odata/tasks?tenantguid=${ tenantguid }`)
	},
	getTask(id: number) {
		return instance.get(`Tasks/${ id }`)
	},
	getPriorities() {
		return instance.get(`Priorities`)
	},
	getStatuses() {
		return instance.get(`Statuses`)
	},
	getUsers() {
		return instance.get(`Users`)
	},
	addTask(name: string, description: string) {
		return instance.post(`Tasks`,
			{
				"name": name,
				"description": description,
			}
		)
	},
	editTask(id: number, statusId: number, priorityId: number, executorId: number, comment: string) {
		return instance.put(`Tasks`, {
				"id": id,
				"statusId": statusId,
				"executorId": executorId,
				"priorityId": priorityId,
				"comment": comment
			}
		)
	},
}