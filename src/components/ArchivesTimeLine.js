// @mui
import PropTypes from 'prop-types';
import {Typography} from '@mui/material';
import {
    Timeline,
    TimelineDot,
    TimelineItem,
    TimelineContent,
    TimelineSeparator,
    TimelineConnector,
    TimelineOppositeContent
} from '@mui/lab';
import {fDate} from '../utils/formatTime';


// ----------------------------------------------------------------------

ArchivesTimeLine.propTypes = {
    list: PropTypes.array.isRequired,
};

export default function ArchivesTimeLine({list}) {
    return (
        <Timeline>
            {
                list.map((item, index) => <ArchivesItem key={item.ID} item={item} isLast={index === list.length - 1}/>)
            }
        </Timeline>
    );
}

// ----------------------------------------------------------------------

ArchivesItem.propTypes = {
    isLast: PropTypes.bool,
    item: PropTypes.shape({
        CreatedAt: PropTypes.string,
        title: PropTypes.string,
        type: PropTypes.string,
    }),
};

function ArchivesItem({item, isLast}) {
    const { title, CreatedAt} = item;
    const color = ['primary',
        'success',
        'info',
        'warning',
        'error',]
    return (
        <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
                {fDate(CreatedAt)}
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot
                    color={
                        color[Math.floor(Math.random()*5)]
                    }
                />
                {isLast ? null : <TimelineConnector/>}
            </TimelineSeparator>

            <TimelineContent>
                <Typography variant="subtitle2">{title}</Typography>
            </TimelineContent>
        </TimelineItem>
    );
}
