import moment from 'moment';

/**
 * 
 * @param { Object } rawData 
 */
export const normalizeUserData = rawData => {
    const returnData = {};
    
    //Normalizing moment history data
    if (rawData.moment_history) {
        returnData.moment_history = rawData.moment_history.map(item => {
            item.start = moment(item.start).format('DD MMM YYYY, hh mm ss');
            return item;
        });
    }

    if (rawData.duration) {
        returnData.duration = rawData.duration;
    }

    if (rawData.distance) {
        returnData.distance = rawData.distance;
    }

    return returnData;
}
