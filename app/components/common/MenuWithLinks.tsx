// common Menu Component

import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Router from 'next/router';

class MenuWithLinks extends React.PureComponent<{
    options: any[];
}> {
    public state = {
        anchorEl: null,
    };

    public render() {
        const { options, children } = this.props;
        const { anchorEl } = this.state;

        return (
            <div style={{ textAlign: 'center' }}>
                <div
                    aria-controls={anchorEl ? 'simple-menu' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                    onKeyPress={this.handleClick}
                >
                    {children}
                </div>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    {options.map((option, i) => 
                        option.separator ? (
                            <hr style={{ width: '85%', margin: '10px auto' }} key={`separated-${i}`} />
                        ) : (
                            <MenuItem
                                onClick={() => {
                                    Router.push(option.href, option.as || option.href);
                                    this.handleClose();
                                }}
                                key={option.href}
                                style={{
                                    fontWeight: 300,
                                    fontSize: '14px',
                                }}
                            >
                                {option.text}
                            </MenuItem>
                        ),
                    )}
                </Menu>
            </div>
        );
    }

    public handleClick = (event) => {
        this.setState({ anchorEl: event.currentTarget });
    }

    public handleClose = () => {
        this.setState({ anchorEl: null});
    };
}

export default MenuWithLinks;
