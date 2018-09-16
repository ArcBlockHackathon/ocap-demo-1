/**
* 获取上一个月
* @date 格式为yyyy-mm-dd的日期，如：2018-01-25
*/
export const getPreMonth = date =>  {
    let arr = date.split('-');
    let year = arr[0];
    let month = arr[1];
    let day = arr[2];

    let year2 = year;
    let month2 = parseInt(month) - 1;
    if (month2 == 0) {
        year2 = parseInt(year2) - 1;
        month2 = 12;
    }

    let day2 = day;
    let days2 = new Date(year2, month2, 0);
    days2 = days2.getDate();
    if (day2 > days2) {
        day2 = days2;
    }

    if (month2 < 10) {
        month2 = '0' + month2;
    }

    return year2 + '-' + month2 + '-' + day2;
}

/**
 * 获取指定范围内所有日期
 * @param  {Date} startDate 开始日期
 * @param  {Date} endDate   结束日期
 * @return {Array}          日期集合
 */
export const getAllDate = (startDate, endDate) => {
    let start = startDate;
    let dates = [];

    while (start.getTime() <= endDate.getTime()) {
        let date = start.setDate(start.getDate() + 1);
        start = new Date(date);
        dates.push(formatDate(start));
    }

    return dates;
}

/**
 * 格式化时间
 * @param  {Date} date 需要格式化的时间
 * @return {string}    格式化后的时间（2017-10-08）
 */
export const formatDate = date => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const formatNumber = n => {
        n = n.toString();
        return n[1] ? n : '0' + n;
    }

    return [year, month, day].map(formatNumber).join('-');
}
