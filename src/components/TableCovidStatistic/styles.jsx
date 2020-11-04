export const styles = theme => ({
    tableCellHead: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    tableCellBody: {
        fontSize: 14,
    },
    tableCellRow: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
});
