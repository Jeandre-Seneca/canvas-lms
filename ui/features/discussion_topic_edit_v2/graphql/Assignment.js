/*
 * Copyright (C) 2023 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */
import gql from 'graphql-tag'
import {bool, number, shape, string} from 'prop-types'
import {AssignmentGroup} from './AssignmentGroup'

export const Assignment = {
  fragment: gql`
    fragment Assignment on Assignment {
      id
      _id
      name
      postToSis
      pointsPossible
      gradingType
      unlockAt
      dueAt
      lockAt
      peerReviews {
        anonymousReviews
        automaticReviews
        count
        dueAt
        enabled
        intraReviews
      }
      assignmentGroup {
        ...AssignmentGroup
      }
    }
    ${AssignmentGroup.fragment}
  `,

  shape: shape({
    _id: string,
    id: string,
    name: string,
    assignmentGroup: AssignmentGroup.shape,
    postToSis: bool,
    pointsPossible: number,
    gradingType: string,
    unlockAt: string,
    dueAt: string,
    lockAt: string,
  }),

  mock: ({
    id = 'gfhrgsjaksa==',
    _id = '9',
    name = 'This is an Assignment',
    assignmentGroup = AssignmentGroup.mock(),
    postToSis = false,
    pointsPossible = 10,
    gradingType = 'points',
    unlockAt = null,
    dueAt = null,
    lockAt = null,
  } = {}) => ({
    id,
    _id,
    name,
    assignmentGroup,
    postToSis,
    pointsPossible,
    gradingType,
    unlockAt,
    dueAt,
    lockAt,
    __typename: 'Assignment',
  }),
}
