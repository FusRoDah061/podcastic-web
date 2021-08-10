import React, { cloneElement } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import {
  TabsStyled,
  TabButtonContainer,
  TabsContentStyled,
  TabsNavigationStyled,
} from './styles';

interface TabProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export const Tab: React.FC<TabProps> = ({ label, active = false, onClick }) => {
  return (
    <TabButtonContainer active={active}>
      <button type="button" onClick={onClick}>
        {label}
      </button>
    </TabButtonContainer>
  );
};

type Tab = React.ReactElement<Tab>;

interface TabsProps {
  defaultActiveIndex?: number;
  children: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ children, defaultActiveIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState<number>(defaultActiveIndex);

  const handleTabClick = useCallback(
    (tabIndex: number) => {
      if (tabIndex !== activeIndex) {
        setActiveIndex(tabIndex);
      }
    },
    [activeIndex],
  );

  const cloneTabElement = useCallback(
    (tab, index = 0) => {
      return cloneElement<TabProps>(tab, {
        onClick: () => handleTabClick(index),
        active: index === activeIndex,
        label: tab.props.label,
        key: tab.props.label,
      });
    },
    [activeIndex, handleTabClick],
  );

  const renderActiveTabContent = useCallback(() => {
    if (children[activeIndex]) {
      return children[activeIndex].props.children;
    }

    return children[0].props.children;
  }, [children, activeIndex]);

  const renderTabNavigation = useCallback(() => {
    if (!Array.isArray(children)) {
      return cloneTabElement(children);
    }

    return children.map(cloneTabElement);
  }, [children, cloneTabElement]);

  return (
    <TabsStyled>
      <TabsContentStyled>{renderActiveTabContent()}</TabsContentStyled>

      <TabsNavigationStyled>{renderTabNavigation()}</TabsNavigationStyled>
    </TabsStyled>
  );
};

export default Tabs;
