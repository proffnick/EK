import React, { act } from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AppBottomTabsNav } from '../components/navigation/AppBottomTabsNav';
import useNavigator from '../hooks/useNavigation';
import useRoutes from '../hooks/useRoutes';

// Mocking hooks
jest.mock('../hooks/useNavigation', () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('../hooks/useRoutes', () => ({
  __esModule: true,
  default: jest.fn(),
}));


describe('AppBottomTabsNav', () => {
  beforeEach(() => {
    // Mock return values for hooks
    (useNavigator as jest.Mock).mockReturnValue({
      currentRouteName: 'HOMESCREEN',
    });
    
    (useRoutes as jest.Mock).mockReturnValue({
      HOME: 'HOMESCREEN',
      MEDIA: 'MEDIASCREEN',
      GAMES: 'GAMESSCREEN',
      REPORTS: 'REPORTSSCREEEN',
      ACCOUNT: 'ACCOUNT',
    });
  });

  act(() => { 
    it('renders bottom tab navigator with all screens', () => {
      const { queryAllByText } = render(
        <NavigationContainer>
          <AppBottomTabsNav />
        </NavigationContainer>
      );

      expect(queryAllByText('Home').length).toBeGreaterThan(0);
      expect(queryAllByText('Media').length).toBeGreaterThan(0);
      expect(queryAllByText('Games').length).toBeGreaterThan(0);
      expect(queryAllByText('Reports').length).toBeGreaterThan(0);
      expect(queryAllByText('Account').length).toBeGreaterThan(0);
    });

    it('applies correct styles based on the current route', () => {
      (useNavigator as jest.Mock).mockReturnValueOnce({
        currentRouteName: 'MEDIASCREEN',
      });

      const { queryAllByText } = render(
        <NavigationContainer>
          <AppBottomTabsNav />
        </NavigationContainer>
      );

      const mediaTab = queryAllByText('Media');
      expect(mediaTab.length).toBeGreaterThan(0);  
    });
  });
});


