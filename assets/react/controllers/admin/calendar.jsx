import React from 'react'
import FullCalendar from '@fullcalendar/react'
import bootstrap5Plugin from '@fullcalendar/bootstrap5'
import timeGridPlugin from '@fullcalendar/timegrid'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'
import interactionPlugin from '@fullcalendar/interaction'

export default function Calendar(props) {
    return (
        <FullCalendar
            plugins={[timeGridPlugin, bootstrap5Plugin, interactionPlugin]}
            initialView="timeGridWeek"
            locale={'fr'}
            titleFormat={{
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            }}
            headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'timeGridWeek,timeGridDay',
            }}
            slotLabelFormat={{
                hour: '2-digit',
                minute: '2-digit',
                omitZeroMinute: false,
                hour12: false,
            }}
            events={props.path}
            weekends={false}
            themeSystem="bootstrap5"
            slotMinTime={'09:00:00'}
            slotMaxTime={'18:00:00'}
            height="650px"
        />
    )
}

function eventDidMount(info) {
    return new bootstrap.Tooltip(info.el, {
        title: info.event.title + '<br>' + info.event.extendedProps.content,
        placement: 'top',
        trigger: 'hover',
        html: true,
    })
}
