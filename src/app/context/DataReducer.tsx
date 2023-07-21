import Data from '@/data/Data'

export const initialData = {
    data: new Data(),
};

export const DataReducer = (value: any, action: any) => {
    switch ( action.type ) {
        case 'ADD_APPLICATION': {
            console.log("ADD_APPLICATION")
            return {
                ...value,
                data: value.data.addApplication(action.payload)
            };
        }
        case 'GET_APPLICATIONS': {
            if (value.data == null) {
                return null;
            }
            return {
                ...value,
                data: value.data
            };
        }
    }
}