import React from 'react'
import { Grid, Button, Input, Icon } from 'semantic-ui-react'

import 'semantic-ui-less/definitions/globals/reset.less';
import 'semantic-ui-less/definitions/globals/site.less';

import 'semantic-ui-less/definitions/collections/grid.less';
import 'semantic-ui-less/definitions/elements/button.less';
import 'semantic-ui-less/definitions/elements/input.less';

import './icon.less';

const App = () => {
  return (
    <Grid columns={3} celled divided>

      <Grid.Row>
        <Grid.Column> <Button primary> button </Button> </Grid.Column>
        <Grid.Column> <Input loading icon='user' iconPosition='left' placeholder='Search...' /> </Grid.Column>
        <Grid.Column> <Icon disabled name='users' /> </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Button animated='vertical'>
            <Button.Content hidden>Shop</Button.Content>
            <Button.Content visible>
              <Icon name='shop' />
            </Button.Content>
          </Button>
        </Grid.Column>
        <Grid.Column> 6 </Grid.Column>
        <Grid.Column> 7 </Grid.Column>
      </Grid.Row>

    </Grid>
  )
}

export default App
