import React, { Component } from 'react'
import {Meta,Story} from '@storybook/react'
import {Props,Button} from '../src/Button'


 const meta:Meta={
    title:'Button',
    component: Button
 }

 export default meta

 export const Default = <Button variant='primary'> click here</Button>

