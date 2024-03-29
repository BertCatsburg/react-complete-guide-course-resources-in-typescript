import {Badge} from '../index'
import React from 'react'

interface TabInterface {
  isSelected: boolean
  onSelect: () => void
  badgeCaption: string
  children: React.ReactNode
}
const Tab = ({ isSelected, onSelect, badgeCaption, children }: TabInterface) => {
  return (
    <li>
      <button
        className={isSelected ? 'selected' : undefined}
        onClick={onSelect}
      >
        {children}
        <Badge caption={badgeCaption}></Badge>
      </button>
      {isSelected && <div className="active-tab-indicator" />}
    </li>
  );
}

type SelectedTypeType =  'active' | 'completed' | 'failed'
interface ChallengeTabsInterface {
  selectedType: SelectedTypeType
  onSelectType: (selectedType: SelectedTypeType) => void
  challenges: any
  children: React.ReactNode
}
export const ChallengeTabs = ({
  selectedType,
  onSelectType,
  challenges,
  children,
}: ChallengeTabsInterface) => {
  return (
    <>
      <menu id="tabs">
        <Tab
          isSelected={selectedType === 'active'}
          onSelect={() => onSelectType('active')}
          badgeCaption={challenges.active.length}
        >
          Active
        </Tab>
        <Tab
          isSelected={selectedType === 'completed'}
          onSelect={() => onSelectType('completed')}
          badgeCaption={challenges.completed.length}
        >
          Completed
        </Tab>
        <Tab
          isSelected={selectedType === 'failed'}
          onSelect={() => onSelectType('failed')}
          badgeCaption={challenges.failed.length}
        >
          Failed
        </Tab>
      </menu>
      <div>{children}</div>
    </>
  );
}
