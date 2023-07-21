import Application from '@/components/Application';

class Data {
    private applications: Application[];
    private id: number;

    constructor(){
        this.applications = [];
        this.id = 0;
    }

    getId() {
        return this.id;
    }

    addApplication(application: Application) {
        this.applications.push(application);
    }

    getApplications() {
        return this.applications;
    }

    getApplication(index: number) {
        return this.applications[index];
    }

    removeApplication(index: number) {
        this.applications.splice(index, 1);
    }

    updateApplication(index: number, application: Application) {
        this.applications[index] = application;
    }

    getApplicationCount() {
        return this.applications.length;
    }
}

// create a single instance of the Data class and make it accessible by any file
// const data = new Data();
// export default data;

export default Data;