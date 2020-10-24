import React, { useDebugValue } from 'react'
import { rerender } from '../../rerender';
import createTable from './arrayCalendar';
import classes from './Calendar.module.css'


let date = new Date();

let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

let previousMonth = () => {
    date.setMonth(date.getMonth() - 1);
    rerender();
}

let nextMonth = () => {
    date.setMonth(date.getMonth() + 1);
    rerender();
}


const TableCalendar = () => {
    let dateTable = createTable(date.getFullYear(), date.getMonth());
    return (
        <div className={classes.calendar}>
            <div className={classes.option}>
                <button onClick={previousMonth}>
                    &#8592;
                </button>
                <div className={classes.monthYear}>
                    <span> {month[date.getMonth()]} </span>
                    <span> {date.getFullYear()} </span>
                </div>
                <button onClick={nextMonth}>
                    &#8594;
                </button>
            </div>
            <table>
                <thead>
                    <tr>
                        <td>Mon</td>
                        <td>Tue</td>
                        <td>Wed</td>
                        <td>Thu</td>
                        <td>Fri</td>
                        <td>Sat</td>
                        <td>Sun</td>
                    </tr>
                </thead>
                <tbody>
                    {dateTable.map(week =>
                        <tr className="week">
                            {week.map(day => {
                                if (day.current == 0) {
                                    return (
                                        <td className={classes.day + ' ' + classes.nocMonth}>
                                            {day.day}
                                        </td>
                                    );
                                } else {
                                    return (
                                        <td className={classes.day + ' ' + classes.nowMonth} >
                                            {day.day}
                                        </td>
                                    );
                                }
                            }
                            )}
                        </tr>
                    )}
                </tbody>
            </table>
        </div >
    )
}

export default TableCalendar;
