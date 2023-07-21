import State from '@/components/State'

class Application {

    // constructor
    constructor(private name: String, private description: String, private role: String, private state: State, private deadline: String, private url: String) {}
  
    // getter methods
    getName() {
        return this.name;
    }
    getDescription() {
        return this.description;
    }
    getRole() {
        return this.role;
    }
    getState() {
        return this.state;
    }
    getDeadline() {
        return this.deadline;
    }
    getUrl() {
        return this.url;
    }

    // setter methods
    setName(name: String) {
        this.name = name;
    }
    setDescription(description: String) {
        this.description = description;
    }
    setRole(role: String) {
        this.role = role;
    }
    setState(state: State) {
        this.state = state;
    }
    setDeadline(deadline: String) {
        this.deadline = deadline;
    }
    setUrl(url: String) {
        this.url = url;
    }
  }
  
export default Application;