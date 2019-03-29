import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Card, Button, Typography, Space } from '../../components'

import { SyncDevice } from '../../modals'

import styles from './Devices.module.scss'

class Devices extends React.Component {
  constructor (props) {
    super(props)
    this.state = { addDevice: false }
    this.handleAddDeviceClick = this.handleAddDeviceClick.bind(this)
    this.renderSyncModal = this.renderSyncModal.bind(this)
    this.handleSyncModalClosed = this.handleSyncModalClosed.bind(this)
  }

  handleAddDeviceClick () {
    this.setState({ addDevice: true })
  }

  handleSyncModalClosed () {
    this.setState({ addDevice: false })
  }

  renderSyncModal () {
    return this.state.addDevice ? <SyncDevice onClose={this.handleSyncModalClosed} /> : false
  }

  render () {
    const { user, devices } = this.props

    if (!user) return <Redirect to='/' />

    return (
      <div className={styles.Devices}>
        {this.renderSyncModal()}
        <div className={styles.topSection}>
          <Typography type='title-page'>Mes appareils</Typography>
          <Button secondary>Ajouter un appareil (bientôt)</Button>
        </div>

        <Space size={16} />
        <div className={styles.cards}>
          {devices.map((device, index) => (
            <div key={index} className={styles.Card}>
              <Card title={device.name} color={device.color} description={device.description} />
            </div>
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.masq.currentUser,
  devices: state.masq.devices
})

Devices.propTypes = {
  user: PropTypes.object,
  devices: PropTypes.arrayOf(PropTypes.object)
}

export default connect(mapStateToProps)(Devices)
