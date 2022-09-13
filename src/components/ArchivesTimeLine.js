// @mui
import PropTypes from 'prop-types';
import { Typography} from '@mui/material';
import {
    Timeline,
    TimelineDot,
    TimelineItem,
    TimelineContent,
    TimelineSeparator,
    TimelineConnector,
    TimelineOppositeContent
} from '@mui/lab';



// ----------------------------------------------------------------------

ArchivesTimeLine.propTypes = {
    list: PropTypes.array.isRequired,
};

export default function ArchivesTimeLine({ list}) {
    return (
        <Timeline>
            {
                list.map((item, index) => <ArchivesItem key={item.id} item={item} isLast={index === list.length - 1}/>)
            }
        </Timeline>
    );
}

// ----------------------------------------------------------------------

ArchivesItem.propTypes = {
    isLast: PropTypes.bool,
    item: PropTypes.shape({
        time: PropTypes.string,
        title: PropTypes.string,
        type: PropTypes.string,
    }),
};

function ArchivesItem({item, isLast}) {
    const {type, title, time} = item;
    return (
        <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
                {time}
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot
                    color={
                        (type === 'order1' && 'primary') ||
                        (type === 'order2' && 'success') ||
                        (type === 'order3' && 'info') ||
                        (type === 'order4' && 'warning') ||
                        'error'
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
