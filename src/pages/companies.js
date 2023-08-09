import Head from 'next/head';
import { OverviewLatestOrders } from 'src/sections/overview/overview-latest-orders';
import { OverviewSales } from 'src/sections/overview/overview-sales';
import { OverviewTraffic } from 'src/sections/overview/overview-traffic';

const now = new Date();

import {Box, Container, Pagination, Unstable_Grid2 as Grid} from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';


const Page = () => (
  <>
    <Head>
      <title>
        Report | ethbvoting
      </title>
    </Head>
    <Container>
    <Grid
            xs={12}
            lg={8}
          >
            <OverviewSales
              chartSeries={[
                {
                  name: 'This year',
                  data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20]
                },
                {
                  name: 'Last year',
                  data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13]
                }
              ]}
              sx={{ height: '100%' }}
            />
          </Grid>
    <Grid
            xs={12}
            md={6}
            lg={4}
          >
            <OverviewTraffic
              chartSeries={[63, 15, 22]}
              labels={['Desktop', 'Tablet', 'Phone']}
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid
            xs={12}
            md={12}
            lg={8}
          >
            <OverviewLatestOrders
              orders={[
                {
                  id: 'f69f88012978187a6c12897f',
                  ref: 'VOT001',
                  amount: 30.5,
                  customer: {
                    name: 'test@ethbvoting.io'
                  },
                  createdAt: 1555016400000,
                  status: 'voted'
                },
                {
                  id: '9eaa1c7dd4433f413c308ce2',
                  ref: 'VOT002',
                  amount: 25.1,
                  customer: {
                    name: 'glow@gmail.com'
                  },
                  createdAt: 1555016400000,
                  status: 'not_voted'
                },
                {
                  id: '01a5230c811bd04996ce7c13',
                  ref: 'VOT003',
                  amount: 10.99,
                  customer: {
                    name: 'kembo@tukenya.io'
                  },
                  createdAt: 1554930000000,
                  status: 'voted'
                },
                {
                  id: '1f4e1bd0a87cea23cdb83d18',
                  ref: 'VOT004',
                  amount: 96.43,
                  customer: {
                    name: 'wangui@github.io'
                  },
                  createdAt: 1554757200000,
                  status: 'voted'
                },
                {
                  id: '9f974f239d29ede969367103',
                  ref: 'VOT005',
                  amount: 32.54,
                  customer: {
                    name: 'mesh@vercel.app'
                  },
                  createdAt: 1554670800000,
                  status: 'error'
                },
                {
                  id: 'ffc83c1560ec2f66a1c05596',
                  ref: 'VOT006',
                  amount: 16.76,
                  customer: {
                    name: 'orina@hacker.to'
                  },
                  createdAt: 1554670800000,
                  status: 'voted'
                }
              ]}
              sx={{ height: '100%' }}
            />
          </Grid>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Pagination
              count={3}
              size="small"
            />
          </Box>
    </Container>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
