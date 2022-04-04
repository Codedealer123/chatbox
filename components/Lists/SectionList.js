import {SectionList, Text} from 'react-native'

import PropTypes from 'prop-types'
import React from 'react'
import UserListItem from '../UsersListItem';

const renderItem = ({item}) => <UserListItem user = {item} />

const renderSectionHeader = ({section}) => <Text>{section.title}</Text>

const SectionListView = ({contacts}) => {
  const contactsByLetter = contacts.reduce((obj, contact) => {
    const firstLetter = contact.name[0].toUpperCase()
    return {
      ...obj,
      [firstLetter]: [...(obj[firstLetter] || []), contact],
    }
  }, {})

  const sections = Object.keys(contactsByLetter).sort().map(letter => ({
    data: contactsByLetter[letter],
    title: letter,
  }))

  return <SectionList sections={sections} renderItem={renderItem} renderSectionHeader={renderSectionHeader} />
}

SectionListView.propTypes = {
  contacts: PropTypes.array,
}

export default SectionListView
