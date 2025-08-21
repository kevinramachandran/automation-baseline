/// <reference types="cypress" />

/**
 * QA Metrics Dashboard - API & UI Tests
 */

describe('QA Metrics - API Tests', () => {
  let creds;

  const commonHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'DTOP-API-TOKEN': 'fkO9eqvBkAwC2jLDsMY9L7Cnm9TGJEsXDudllrWLfFI=',
    Origin: 'https://sit.exora.devopslabs.tech',
    Referer: 'https://sit.exora.devopslabs.tech/DevOpsInsights/QAMetrics'
  };

  const requestBodyWithDateRange = {
    projects: ['Architecture Compliance', 'C Advisor360'],
    sprints: [],
    issueTypes: [],
    priorities: [],
    status: [],
    assignee: [],
    reporter: [],
    fromDate: 1746037800,
    toDate: 1748405554.383
  };

  before(() => {
    cy.fixture('credentials').then((data) => {
      creds = data;
    });
  });

  const apiTests = [
    {
      name: 'Tickets Verified and Bugs Created Trend Chart',
      endpoint: 'getTicketsVerifiedAndBugCreatedTrendChart',
      body: requestBodyWithDateRange,
      file: 'QA_ticketsVerifiedAndBugs.json'
    },
    {
      name: 'Tickets Created on Current Day',
      endpoint: 'getTicketsCreatedOnCurrentDay',
      body: { ...requestBodyWithDateRange, fromDate: null, toDate: null },
      file: 'QA_ticketsCreatedOnCurrentDay.json'
    },
    {
      name: 'Bugs Created by Severity on Current Day',
      endpoint: 'getBugsCreatedSeverityOnCurrentDay',
      body: { ...requestBodyWithDateRange, fromDate: null, toDate: null },
      file: 'QA_todayBugsCratedBySeverity.json'
    },
    {
      name: 'Bugs Created by Severity in Date Range',
      endpoint: 'getBugsCreatedSeverityOnGivenDateRange',
      body: requestBodyWithDateRange,
      file: 'QA_bugsCratedBySeverity.json'
    },
    {
      name: 'Tickets Verified in Date Range',
      endpoint: 'getTicketsVerifiedOnGivenDateRange',
      body: requestBodyWithDateRange,
      file: 'QA_verifiedTicketDate.json'
    }
  ];

  apiTests.forEach(({ name, endpoint, body, file }) => {
    it(`Fetches ${name}`, () => {
      cy.request({
        method: 'POST',
        url: `${creds.baseUrl.replace('/auth', '')}/backend/api/v1/QAMetrics/${endpoint}`,
        headers: commonHeaders,
        body
      }).then((response) => {
        expect(response.status).to.eq(200);
        cy.writeFile(`cypress/reports/${file}`, response.body);
      });
    });
  });
});


/**
 * QA Metrics - UI Tests
 */
describe('QA Metrics - UI Tests', () => {
  const selectors = {
    login: {
      username: '#login_form > div:nth-of-type(1) input',
      password: '#login_form > div:nth-of-type(2) input',
      button: '#loginBtn'
    },
    sidebar: {
      qaMetricsMenu: 'li:nth-of-type(5) img',
      subMenu: 'li:nth-of-type(2) div.nav-item-text'
    },
    filters: {
      project: 'div.devops-filter-container > div:nth-of-type(1) div.select-value',
      sprint: 'div.devops-filter-container > div:nth-of-type(2) div.select-value',
      issueType: 'div.devops-filter-container > div:nth-of-type(3) div.select-value',
      priority: 'div.devops-filter-container > div:nth-of-type(4) div.select-value',
      applyBtn: 'div:nth-of-type(7) > button'
    },
    chart: {
      canvas: '.echarts-for-react canvas',
      header: 'div.customQAClass h4'
    },
    defectCount: {
      leftPanel: 'div.custom-off-canvas div.active > div',
      mainPanel: 'div.dashcol.bg-white.mt-3 strong:nth-child(3)'
    }
  };

  beforeEach(() => {
    cy.viewport(1366, 768);
    cy.visit('https://sit.exora.devopslabs.tech/auth');

    // Login
    cy.get(selectors.login.username).type('adarsh');
    cy.get(selectors.login.password).type('therssparrow@9365');
    cy.get(selectors.login.button).click();

    // Navigate to QA Metrics
    cy.get(selectors.sidebar.qaMetricsMenu, { timeout: 10000 }).click();
    cy.get(selectors.sidebar.subMenu).click();
    cy.get("div.connected-timeline > div:nth-of-type(2) a").click();

    // Apply filters
    [selectors.filters.project, selectors.filters.sprint, selectors.filters.issueType, selectors.filters.priority].forEach(
      (filter) => {
        cy.get(filter).click();
        cy.get('li.selectAllOptionClass > span').click();
      }
    );
    cy.get(selectors.filters.applyBtn).click();
    cy.wait(3000);
  });

  it('Verifies header contains "Tickets Verified"', () => {
    cy.get(selectors.chart.header).should('contain.text', 'Tickets Verified on');
  });

  it('Validates chart tooltip on hover', () => {
    cy.get('div.custom-off-canvas > button').click();
    cy.get('div.customQAClass > div:nth-of-type(2) canvas')
      .should('be.visible')
      .then(($canvas) => {
        const rect = $canvas[0].getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        cy.wrap($canvas).trigger('mousemove', {
          clientX: centerX,
          clientY: centerY,
          force: true
        });

        cy.get('div.chartHolder').should('be.visible');
      });
  });

  const issueTypes = [
    { name: 'Defect', selector: 'div.custom-off-canvas div.active > div' },
    { name: 'Task', selector: 'div.custom-off-canvas div:nth-of-type(3) > div div:nth-of-type(3) > div' },
    { name: 'Feature', selector: 'div.custom-off-canvas > div > div > div:nth-of-type(2) > div div:nth-of-type(2) > div' },
    { name: 'Epic', selector: 'div.custom-off-canvas div:nth-of-type(1) > div' },
    { name: 'Change Request', selector: 'div.custom-off-canvas div:nth-of-type(5) > div' },
    { name: 'Technical Debt', selector: 'div.custom-off-canvas div:nth-of-type(6) > div' }
  ];

  issueTypes.forEach(({ name, selector }) => {
    it(`Validates count for ${name}`, () => {
      cy.get(selector).click();
      cy.wait(2000);

      cy.get('div.custom-off-canvas.offcanvas-end.show h4')
        .first()
        .invoke('text')
        .then((text1) => {
          const leftPanelCount = parseInt(text1);

          cy.get(selectors.defectCount.mainPanel)
            .invoke('text')
            .then((text2) => {
              const mainPanelCount = parseInt(text2);
              expect(leftPanelCount).to.equal(mainPanelCount);
            });
        });
    });
  });
});
