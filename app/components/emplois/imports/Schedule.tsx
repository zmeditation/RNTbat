import React from 'react'
import Days from './Utils/ScheduleAPI'
import ScheduleColumn from './Utils/ScheduleColumn'
const Schedule = () => {
    return (
        <div className='Schedule'>

            <table border={0}>
                <thead>
                    <tr>
                        <td></td>
                        <td>
                            <div>
                                <span>08:30</span>
                                <span>11:00</span>
                            </div>
                        </td>

                        <td>
                            <div>
                                <span>11:00</span>
                                <span>13:30</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <span>13:30</span>
                                <span>16:00</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <span>16:00</span>
                                <span>18:30</span>
                            </div>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {Days.map((day, index) => {
                        return (
                            <tr>
                                <td key={index}>
                                    <div>
                                        <span>{day}</span>
                                        <span>18°C</span>
                                    </div>
                                </td>
                                <td>
                                    {day == "Lundi" ? <ScheduleColumn name="M.Yahyaoui" class="TP1" /> : ''}
                                    {day == "Samedi" ? <ScheduleColumn name="M.Azzimani" class="TP5" /> : ''}
                                </td>
                                <td>
                                    {day == "Lundi" ? <ScheduleColumn name="M.Yahyaoui" class="TP1" /> : ''}
                                    {day == "Mercredi" ? <ScheduleColumn name="M.Moustaid" class="TP1" /> : ''}

                                </td>
                                <td>
                                    {day == "Mercredi" ? <ScheduleColumn name="Dinia" class="Cyber" /> : ''}
                                    {day == "Jeudi" ? <ScheduleColumn name="M.Aissaoui" class="Seminaire" /> : ''}
                                </td>
                                <td>
                                    {day == "Jeudi" ? <ScheduleColumn name="M.Aissaoui" class="Seminaire" /> : ''}
                                    {day == "Mardi" ? <ScheduleColumn name="M.Yahyaoui" class="TP1" /> : ''}

                                </td>

                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Schedule